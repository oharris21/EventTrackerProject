package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Nutrition;

public interface NutritionRepository extends JpaRepository <Nutrition, Integer> {
	// 2 or 3 of your own queries  
}
