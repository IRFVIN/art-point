package com.artpoint.service;

import java.util.ArrayList;
import java.util.List;

import com.artpoint.entity.Art;
import com.artpoint.repository.ArtRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArtService {
    @Autowired
    private ArtRepository artRepository;

    public List<Art> getAllArt() {
        List<Art> art = new ArrayList<>();
        artRepository.findAll().forEach(art::add);

        return art;
    }

    public Art getArt(long id) {
        return artRepository.findById(id).get();
    }

    public void addArt(Art art) {
        artRepository.save(art);
    }

    public void updateArt(long id, Art art) {
        artRepository.save(art);
    }

    public void deleteArt(long id) {
        artRepository.deleteById(id);
    }
}
