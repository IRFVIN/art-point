package com.artpoint.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ArtFilters {

//    @Autowired
//    private ArtRepository artRepository;
//
//    public ArtFilters() {
//        minPrice = artRepository.getMinPrice();
//        maxPrice = artRepository.getMaxPrice();
//    }

    private List<Category> categoryList = new ArrayList<>();
    private String searchTitle;
    private Double minPrice;
    private Double maxPrice;
}
