package com.skilldistillery.eventtracker.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class RequiredNutrients {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int protein; 
	
	private int carbs; 
	
	private int fat; 
	
	private String notes; 
	
	@JsonIgnore
	@ManyToMany(mappedBy = "required")
	List<ConsumedNutrients> consumed; 
	
	@Column(name = "goals_id")
	private Goals goals; 
	
	// end of fields 
	
	public RequiredNutrients() {
		
	}

	public RequiredNutrients(int id, int protein, int carbs, int fat, String notes, List<ConsumedNutrients> consumed,
			Goals goals) {
		super();
		this.id = id;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
		this.notes = notes;
		this.consumed = consumed;
		this.goals = goals;
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

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public List<ConsumedNutrients> getConsumed() {
		return consumed;
	}

	public void setConsumed(List<ConsumedNutrients> consumed) {
		this.consumed = consumed;
	}

	public Goals getGoals() {
		return goals;
	}

	public void setGoals(Goals goals) {
		this.goals = goals;
	}

}
