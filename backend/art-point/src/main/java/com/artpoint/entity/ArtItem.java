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
    private long artId;
    private String artName;
    private String artCategory;
    private String description;
    private String ownerId;
    private String artPhotoLink;
    private double price;
//
//    @ManyToOne
//    private Order order;

}
