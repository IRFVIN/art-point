package com.artpoint.controller;

import com.artpoint.entity.Chat;
import com.artpoint.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    @Autowired
    ChatService chatService;

    @PostMapping("/send")
    public void sendMessage(@RequestBody Chat chat) {
        chatService.sendMessage(chat);
    }

}
