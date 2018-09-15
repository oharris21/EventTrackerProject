package com.skilldistillery.eventtracker.data;

import java.util.List;

import com.skilldistillery.eventtracker.services.Nutrition;

public interface NutritionDAO {
	public List<Nutrition> findAll(); 
	public Nutrition findById(int id); 
	public Nutrition create(Nutrition n); 
	public Nutrition replaceById(int id); 
	public Nutrition updateById(int id, Nutrition n); 
	public boolean delete(int id);
}
