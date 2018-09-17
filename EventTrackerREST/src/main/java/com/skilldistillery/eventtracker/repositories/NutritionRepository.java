package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Nutrition;

public interface NutritionRepository extends JpaRepository <Nutrition, Integer> {
	// 2 3 of your own queries  
	
	// get desired weight for a user 
	List<Nutrition> findByDesiredWeight(); 
	
	// get protein for a user
	List<Nutrition> findByProtein(); 
	
	// get notes for a user 
	List<Nutrition> findByNotes(); 
}
