package com.artpoint.entity;

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

    @OneToMany(mappedBy = "owner")
    private List<Art> myArts;

    @OneToMany(mappedBy = "sender")
    private List<Chat> chatsTo;

    @OneToMany(mappedBy = "receiver")
    private List<Chat> chatsFrom;
}
