package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Nutrition;

public interface NutritionRepository extends JpaRepository <Nutrition, Integer> {
	// get desired weight for a user 
	List<Nutrition> findByDesiredWeight(int weight); 
	
	// get protein for a user
	List<Nutrition> findByProtein(int protein); 
	
	// get notes for a user 
	List<Nutrition> findByNotes(String notes); 
}
