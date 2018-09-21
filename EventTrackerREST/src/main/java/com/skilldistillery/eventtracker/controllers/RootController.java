package com.skilldistillery.eventtracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.skilldistillery.eventtracker.services.NutritionService;

@Controller
public class RootController {
	@Autowired
	private NutritionService ns;
	
	@RequestMapping(path="/")
	public String name() {
		return "index.html"; 
	}

}
