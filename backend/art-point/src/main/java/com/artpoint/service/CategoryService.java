package com.artpoint.service;

import java.util.ArrayList;
import java.util.List;

import com.artpoint.entity.Category;
import com.artpoint.repository.CategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
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
}
