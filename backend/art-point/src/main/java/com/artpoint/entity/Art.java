package com.artpoint.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class Art {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private double price;
    
    //@JsonManagedReference(value = "art-category")
    @ManyToMany
    public List<Category> categories;


    @JsonIgnore
    private String imageLocation;

//    private int quantity;

    @ManyToOne
//    @JsonBackReference
    private User owner;

//    private String artCategory;
//    private String ownerId;
//    @ManyToOne
//    private Order order;

}
