package com.artpoint.service;

import com.artpoint.entity.Order;
import com.artpoint.entity.OrderArt;
import com.artpoint.entity.User;
import com.artpoint.repository.OrderArtRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrderServiceTest {

    @Autowired
    private UserService userService;

    @Autowired
    private OrderService orderService;
    
    @Autowired
    private ArtService artService;
    
    @Autowired
    private OrderArtRepository orderArtRepository;

    @Test
    void saveOrder() {



        Order order = Order.builder()
                .buyer(userService.getUser(1))
                .build();

        System.out.println("Before order = " + order);
        
        orderService.saveOrder(order);
        System.out.println("order = " + order);

        OrderArt orderArt = OrderArt.builder()
                .order(order)
                .art(artService.getArt(1))
                .quantity(5)
                .build();
        
        orderArtRepository.save(orderArt);
        System.out.println("orderArt = " + orderArt);
        
    }
}