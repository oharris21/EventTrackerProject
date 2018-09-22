package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Nutrition;
import com.skilldistillery.eventtracker.repositories.NutritionRepository;

@RestController
@RequestMapping(path="api")
public class NutritionController {
	@Autowired
	private NutritionRepository nr;
	
	@RequestMapping(path="nutritioninfo", method= RequestMethod.GET)
	public List<Nutrition> show() {
		return nr.findAll(); 
	}
	
	@RequestMapping(path="createnutrition", method= RequestMethod.POST)
	public Nutrition saveAndFlush(@RequestBody Nutrition n) {
		return nr.saveAndFlush(n); 
	}
	
	@RequestMapping(path="nutrition/{weight}/weight", method= RequestMethod.GET)
	public List<Nutrition> indexWeight(@PathVariable int weight) {
		return nr.findByDesiredWeight(weight); 
	}
	
	@RequestMapping(path="nutrition/{protein}/protein", method= RequestMethod.GET)
	public List<Nutrition> indexProtein(@PathVariable int protein) {
		return nr.findByProtein(protein); 
	}
	
	@RequestMapping(path="nutrition/notes/{notes}", method= RequestMethod.GET)
	public List<Nutrition> indexNotes(String notes) {
		return nr.findByNotes(notes); 
	}

}
