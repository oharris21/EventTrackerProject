package com.skilldistillery.eventtracker.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ConsumedNutrients {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int protein; 
	
	private int carbs; 
	
	private int fat; 
	
	@JsonIgnore
	@ManyToMany(mappedBy = "consumed")
	List<RequiredNutrients> required; 
	
	// end of fields 
	
	public ConsumedNutrients() {
		
	}

	public ConsumedNutrients(int id, int protein, int carbs, int fat, List<RequiredNutrients> required) {
		super();
		this.id = id;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
		this.required = required;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getProtein() {
		return protein;
	}

	public void setProtein(int protein) {
		this.protein = protein;
	}

	public int getCarbs() {
		return carbs;
	}

	public void setCarbs(int carbs) {
		this.carbs = carbs;
	}

	public int getFat() {
		return fat;
	}

	public void setFat(int fat) {
		this.fat = fat;
	}

	public List<RequiredNutrients> getRequired() {
		return required;
	}

	public void setRequired(List<RequiredNutrients> required) {
		this.required = required;
	}
	
}
