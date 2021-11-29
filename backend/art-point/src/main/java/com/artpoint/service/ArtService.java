package com.artpoint.service;

import java.util.*;

import com.artpoint.entity.Art;
import com.artpoint.entity.ArtFilters;
import com.artpoint.entity.Category;
import com.artpoint.entity.User;
import com.artpoint.repository.ArtRepository;
import com.artpoint.repository.FileSystemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ArtService {
    @Autowired
    private ArtRepository artRepository;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    FileSystemRepository fileSystemRepository;

    // public List<Art> getAllArt() {
    //     List<Art> art = new ArrayList<>();
    //     artRepository.findAll().forEach(art::add);

    //     return art;
    // }

    public ResponseEntity<Map<String, Object>> getAllArts(ArtFilters filters, int page, int size) {
        try {
            List<Art> arts = getAllArts(filters);
            System.out.println(arts.size());
            Pageable pageable = PageRequest.of(page, size);

            final int start = (int) pageable.getOffset();
            final int end = Math.min((start + pageable.getPageSize()), arts.size());
            Page<Art> pageArts = new PageImpl<>(arts.subList(start, end), pageable, arts.size());

            Map<String, Object> response = new HashMap<>();
            response.put("art", pageArts.getContent());
            response.put("currentPage", pageArts.getNumber());
            response.put("totalItems", pageArts.getTotalElements());
            response.put("totalPages", pageArts.getTotalPages());
            response.put("minPrice", Math.floor(artRepository.getMinPrice()));
            response.put("maxPrice", Math.ceil(artRepository.getMaxPrice()));
            response.put("categories", categoryService.getAllCategories());

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public List<Art> getAllArts(ArtFilters filters) {
        List<Art> arts = artRepository.findAll();

        if (filters.getCategoryList() != null && !filters.getCategoryList().isEmpty()) {
            arts = intersection(arts, getArtsByCategories(filters.getCategoryList()));
        }

        if (filters.getSearchTitle() != null && !filters.getSearchTitle().isEmpty()) {
            arts = intersection(arts, getArtsBySearchTitle(filters.getSearchTitle()));
        }

        if (filters.getMinPrice() != null && filters.getMaxPrice() != null)
        arts = intersection(arts, getArtsInPriceRange(filters.getMinPrice(), filters.getMaxPrice()));
        System.out.println(arts.size());
        return arts;
    }

    private List<Art> getArtsByCategories(List<Category> categories) {
        List<Art> arts = new ArrayList<>();
        for (Category category : categories) {
            List<Art> tempArts = categoryService.getArtsByCategoryId(category.getId());
            arts = union(arts, tempArts);
        }

        return arts;
    }

    private List<Art> getArtsInPriceRange(Double minPrice, Double maxPrice) {
        return artRepository.findByPriceBetween(minPrice, maxPrice);
    }

    private List<Art> getArtsBySearchTitle(String searchTitle) {
        return artRepository.findByTitleContainingIgnoreCase(searchTitle);
    }

    public <T> List<T> union(List<T> list1, List<T> list2) {
        Set<T> set = new HashSet<T>();

        set.addAll(list1);
        set.addAll(list2);

        return new ArrayList<T>(set);
    }

    public <T> List<T> intersection(List<T> list1, List<T> list2) {
        List<T> list = new ArrayList<T>();

        for (T t : list1) {
            if(list2.contains(t)) {
                list.add(t);
            }
        }

        return list;
    }

    public ResponseEntity<Map<String, Object>> getAllArt(String title, int page, int size) {
        try {
            List<Art> art = new ArrayList<>();
            Pageable pageable = PageRequest.of(page, size);

            Page<Art> pageArts;
            if (title == null) pageArts = artRepository.findAll(pageable);
            else pageArts = artRepository.findByTitleContainingIgnoreCase(title, pageable);

            art = pageArts.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("art", art);
            response.put("currentPage", pageArts.getNumber());
            response.put("totalItems", pageArts.getTotalElements());
            response.put("totalPages", pageArts.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    public ResponseEntity<Map<String, Object>> getAllArtInPriceRange(int page, int size, int minPrice, int maxPrice) {
//        try {
//            List<Art> art = new ArrayList<>();
//            Pageable pageable = PageRequest.of(page, size);
//
//            Page<Art> pageArts = artRepository.findByPriceBetween(minPrice, maxPrice, pageable);
////            if (title == null) pageArts = artRepository.findAll(pageable);
////            else
////                pageArts = artRepository.findByTitleContainingIgnoreCase(title, pageable);
//
//            art = pageArts.getContent();
//
//            Map<String, Object> response = new HashMap<>();
//            response.put("art", art);
//            response.put("currentPage", pageArts.getNumber());
//            response.put("totalItems", pageArts.getTotalElements());
//            response.put("totalPages", pageArts.getTotalPages());
//
//            return new ResponseEntity<>(response, HttpStatus.OK);
//
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

    public ResponseEntity<Map<String, Object>> getAllUserArt(User owner, String title, int page, int size) {
        try {
            List<Art> art = new ArrayList<>();
            Pageable pageable = PageRequest.of(page, size);

            Page<Art> pageArts;
            if (title == null) pageArts = artRepository.findAllByOwner(owner, pageable);
            else pageArts = artRepository.findByOwnerAndTitleContainingIgnoreCase(owner, title, pageable);

            art = pageArts.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("art", art);
            response.put("currentPage", pageArts.getNumber());
            response.put("totalItems", pageArts.getTotalElements());
            response.put("totalPages", pageArts.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public Art getArt(long id) {
        return artRepository.findById(id).get();
    }

    public Long addArt(Art art, byte[] imageBytes, String imageName) throws Exception {
        String location = fileSystemRepository.save(imageBytes, imageName);
        System.out.println("saved image at: " + location);
        art.setImageLocation(location);
        return artRepository.save(art).getId();
    }

    public FileSystemResource find(Long artID) {
        Art art = artRepository.findById(artID).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        System.out.println("art image location: " + art.getImageLocation());
        return fileSystemRepository.findInFileSystem(art.getImageLocation());
    }


    public void updateArt(long id, Art updatedArt) {
        Art art = artRepository.findById(id).get();
        art.setTitle(updatedArt.getTitle());
        //art.setArtCategory(updatedArt.getArtCategory());
        art.setDescription(updatedArt.getDescription());
        art.setPrice(updatedArt.getPrice());
        artRepository.save(art);
    }

    public void deleteArt(long id) {
        artRepository.deleteById(id);
    }
}
