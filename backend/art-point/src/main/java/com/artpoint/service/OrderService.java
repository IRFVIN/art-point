//package com.artpoint.service;
//
//import com.artpoint.entity.Order;
//import com.artpoint.repository.OrderRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class OrderService {
//    @Autowired
//    private OrderRepository orderRepository;
//
//    public List<Order> getAllOrders() {
//        return orderRepository.findAll();
//    }
//
//    public List<Order> getMyOrders(Long buyerId) {
//        return  orderRepository.findAllByBuyerId(buyerId);
//    }
//
//    public Order getOrder(Long orderId) {return orderRepository.findById(orderId).get();}
//    public Order saveOrder(Order order) {
//        return orderRepository.save(order);
//    }
//    public Order updateOrder(Order order) {return orderRepository.save(order);}
//}
