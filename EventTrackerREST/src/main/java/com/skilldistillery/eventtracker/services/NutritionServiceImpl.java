package com.skilldistillery.eventtracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Nutrition;
import com.skilldistillery.eventtracker.repositories.NutritionRepository;

@Service
public class NutritionServiceImpl implements NutritionService {
	@Autowired
	private NutritionRepository nr; 
	
	@Override
	public List<Nutrition> index(int desiredWeight) {
		return nr.findByDesiredWeight(); 
	}

	@Override
	public List<Nutrition> indexProtein(int protein) {
		return nr.findByProtein(); 
	}

	@Override
	public List<Nutrition> index() {
		return nr.findByNotes(); 
	}
	
}
