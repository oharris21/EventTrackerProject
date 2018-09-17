package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Nutrition;
import com.skilldistillery.eventtracker.services.NutritionService;

@RestController
@RequestMapping(path="api")
public class NutritionController {
	@Autowired
	private NutritionService ns;
	
	@RequestMapping(path="nutrition/{weight}/weight", method= RequestMethod.GET)
	public List<Nutrition> indexWeight(@PathVariable int weight) {
		return ns.index(weight); 
	}
	
	@RequestMapping(path="nutrition/{protein}/protein", method= RequestMethod.GET)
	public List<Nutrition> indexProtein(@PathVariable int protein) {
		return ns.indexProtein(protein); 
	}
	
	@RequestMapping(path="nutrition/notes", method= RequestMethod.GET)
	public List<Nutrition> indexNotes() {
		return ns.index();  
	}

}
