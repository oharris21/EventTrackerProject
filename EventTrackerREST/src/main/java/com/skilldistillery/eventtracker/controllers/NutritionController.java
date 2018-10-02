package com.skilldistillery.eventtracker.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Nutrition;
import com.skilldistillery.eventtracker.repositories.NutritionRepository;
import com.skilldistillery.eventtracker.services.NutritionServiceImpl;

@RestController
@RequestMapping(path="api")
@CrossOrigin({"*","http://localhost:4203"})
public class NutritionController {
	@Autowired
	private NutritionRepository nr;
	@Autowired
	private NutritionServiceImpl ns;
	
	@RequestMapping(path="nutrition", method= RequestMethod.GET)
	public List<Nutrition> show() {
		return nr.findAll(); 
	}
	
	@RequestMapping(path="nutrition", method= RequestMethod.POST)
	public Nutrition saveAndFlush(@RequestBody Nutrition n) {
		return nr.saveAndFlush(n); 
	}
	
	@RequestMapping(path="nutrition/{id}", method= RequestMethod.PUT)
//	public Nutrition Edit(@RequestBody Nutrition n) {
	public Nutrition Edit(@PathVariable int id, @RequestBody Nutrition n) {
		Nutrition nut = ns.updateNutrition(id, n); 
		if (nut == null) {
			// set http status to 404 not found 
		}
		return nut;
	}
	
	@RequestMapping(path="nutrition/{id}", method= RequestMethod.DELETE)
	public void Delete(@PathVariable int id) {
		nr.deleteById(id);
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
