package com.artpoint.service;

import java.util.ArrayList;
import java.util.List;

import com.artpoint.entity.Art;
import com.artpoint.repository.ArtRepository;
import com.artpoint.repository.FileSystemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ArtService {
    @Autowired
    private ArtRepository artRepository;

    @Autowired
    FileSystemRepository fileSystemRepository;

    public List<Art> getAllArt() {
        List<Art> art = new ArrayList<>();
        artRepository.findAll().forEach(art::add);

        return art;
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


    public void updateArt(long id, Art art) {
        artRepository.save(art);
    }

    public void deleteArt(long id) {
        artRepository.deleteById(id);
    }
}
