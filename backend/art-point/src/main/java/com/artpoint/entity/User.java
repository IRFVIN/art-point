package com.artpoint.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String username;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;
    private double rating;

    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
//    @JsonManagedReference
    @JsonIgnore
    private List<Art> myArts;

    @OneToMany(mappedBy = "sender")
    @JsonIgnore
    private List<Chat> chatsTo;

    @OneToMany(mappedBy = "receiver")
    @JsonIgnore
    private List<Chat> chatsFrom;
}
