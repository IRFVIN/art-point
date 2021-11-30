package com.artpoint.controller;

import java.util.List;
import java.util.Map;

import com.artpoint.entity.Category;
import com.artpoint.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @PostMapping(value = "/categories", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addCategory(@RequestBody Category category) {
        //System.out.println(category);
        categoryService.addCategory(category);
    }

    @GetMapping("/category/{id}")
    public Category getCategory(@PathVariable Long id) {
        return categoryService.getCategory(id);
    }

    @PutMapping(value = "/category/{id}")
    public void updateArt(@PathVariable Long id, @RequestBody Category category) {
        categoryService.updateCategory(id, category);
    }

    @DeleteMapping("/category/{id}")
    public void deleteArt(@PathVariable Long id) {
        categoryService.deleteCategory(id);
    }

    @GetMapping("/category/{id}/arts")
    // public List<Art> getCategoryArts(
    //     @RequestParam(defaultValue = "0") int page,
    //     @RequestParam(defaultValue = "10") int size,
    //     @PathVariable Long id
    // ) {
    //     return categoryService.getCategoryArts(id, page, size);
    // }

    public ResponseEntity<Map<String, Object>> getCategoryArts(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @PathVariable Long id
    ) {
        return categoryService.getCategoryArts(id, page, size);
    }
}
