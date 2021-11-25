package com.artpoint.service;

import com.artpoint.entity.Chat;
import com.artpoint.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    ChatRepository chatRepository;

    public Chat sendMessage(Chat chat) {
        return chatRepository.save(chat);
    }
}
