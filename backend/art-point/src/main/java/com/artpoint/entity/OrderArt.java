package com.artpoint.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@IdClass(OrderArtId.class)
@ToString(exclude = "order")
public class OrderArt {

    @Id
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    @JsonBackReference
    private Order order;

    @Id
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Art art;
    private  int quantity;
}