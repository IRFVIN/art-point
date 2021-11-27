package com.artpoint.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.artpoint.entity.Art;
import com.artpoint.repository.ArtRepository;
import com.artpoint.repository.FileSystemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.data.domain.Page;
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
    FileSystemRepository fileSystemRepository;

    // public List<Art> getAllArt() {
    //     List<Art> art = new ArrayList<>();
    //     artRepository.findAll().forEach(art::add);

    //     return art;
    // }

    public ResponseEntity<Map<String, Object>> getAllArt(
        @RequestParam(required = false) String title,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size
    ) {
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
        art.setArtCategory(updatedArt.getArtCategory());
        art.setDescription(updatedArt.getDescription());
        art.setPrice(updatedArt.getPrice());
        artRepository.save(art);
    }

    public void deleteArt(long id) {
        artRepository.deleteById(id);
    }
}
