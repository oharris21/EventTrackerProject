package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Nutrition;

public interface NutritionService {
	public List<Nutrition> index(int desiredWeight);
	public List<Nutrition> indexProtein(int protein);
	public List<Nutrition> indexByNotes(String notes);

}
