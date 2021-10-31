package com.artpoint.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ArtItem {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String description;
    private double price;
    private double rating;

    // TODO: entity relationships
    //private String sellerId;
    //private String artPhotoLink;
    //@ManyToOne
    //private Order order;

}
