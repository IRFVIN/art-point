//package com.artpoint.controller;
//
//import com.artpoint.entity.Order;
//import com.artpoint.service.OrderService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//public class OrderController {
//    @Autowired
//    private OrderService orderService;
//
//    @GetMapping("/orders")
//    public List<Order> getAllOrders() {
//        return orderService.getAllOrders();
//    }
//
//    @GetMapping("/orders/{id}")
//    public Order getOrder(@PathVariable("id") Long orderId) {
//        return orderService.getOrder(orderId);
//    }
//
//    @GetMapping("/orders/my/{id}")
//    public List<Order> getMyOrders(@PathVariable("id") Long buyerId) {
//        return  orderService.getMyOrders(buyerId);
//    }
//}
