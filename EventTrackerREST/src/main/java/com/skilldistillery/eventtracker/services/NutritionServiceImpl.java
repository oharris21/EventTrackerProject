package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

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
		return nr.findByDesiredWeight(desiredWeight); 
	}

	@Override
	public List<Nutrition> indexProtein(int protein) {
		return nr.findByProtein(protein); 
	}

	@Override
	public List<Nutrition> indexByNotes(String notes) {
		return nr.findByNotes(notes); 
	}
	
	public Nutrition updateNutrition(int id, Nutrition n) {
		Optional<Nutrition> nut = nr.findById(id);
		if (nut.isPresent()) { 
			Nutrition nutrition = nut.get();
			if (! n.getFirstName().equals("")) {
				nutrition.setFirstName(n.getFirstName());
			}
			if (! n.getLastName().equals("")) {
				nutrition.setLastName(n.getLastName());
			}
			if (n.getCurrentWeight() != 0) {
				nutrition.setDesiredWeight(n.getDesiredWeight());
			}
			if (n.getDesiredWeight() != 0) {
				nutrition.setCurrentWeight(n.getCurrentWeight());
			}
			if (n.getProtein() != 0) {
				nutrition.setProtein(n.getProtein());
			}
			if (n.getCarbs() != 0) {
				nutrition.setCarbs(n.getCarbs());
			}
			if (n.getFat() != 0) {
				nutrition.setFat(n.getFat());
			}
			if (n.getNotes() != "") {
				nutrition.setNotes(n.getNotes());
			}
			return nr.saveAndFlush(nutrition);
		} 
		else {
			return null;
		}
	}
	
}
