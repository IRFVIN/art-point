package com.artpoint.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Chat {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    User sender;

    @ManyToOne
    User receiver;

    String message;

    @OneToOne
    Art art;

    @CreationTimestamp
//    @Column(name="timestamp", nullable = false, updatable = false, insertable = false)
    private Timestamp timestamp;

}
