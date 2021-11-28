package com.artpoint.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.artpoint.entity.Art;
import com.artpoint.entity.Category;
import com.artpoint.repository.CategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        List<Category> categories = new ArrayList<>();
        categoryRepository.findAll().forEach(categories::add);

        return categories;
    }

    public Category getCategory(Long id) {
        return categoryRepository.findById(id).get();
    }

    public void addCategory(Category category) {
        //System.out.println(category);
        categoryRepository.save(category);
    }

    public void updateCategory(Long id, Category updatedCategory) {
        Category category = categoryRepository.findById(id).get();
        category.setName(updatedCategory.getName());
        categoryRepository.save(category);
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    // public List<Art> getCategoryArts(Long id) {
    //     Category category = categoryRepository.findById(id).get();
    //     return category.getArts();
    // }

    public ResponseEntity<Map<String, Object>> getCategoryArts(Long id, int page, int size) {
        try {
            Category category = categoryRepository.findById(id).get();

            Pageable pageable = PageRequest.of(page, size);

            List<Art> categoryArts = category.getArts();
            final int start = (int) pageable.getOffset();
            final int end = Math.min((start + pageable.getPageSize()), categoryArts.size());
            Page<Art> pageArts = new PageImpl<>(categoryArts.subList(start, end), pageable, categoryArts.size());

            Map<String, Object> response = new HashMap<>();
            response.put("art", pageArts.getContent());
            response.put("currentPage", pageArts.getNumber());
            response.put("totalItems", pageArts.getTotalElements());
            response.put("totalPages", pageArts.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
