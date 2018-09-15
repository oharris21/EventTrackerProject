package com.skilldistillery.eventtracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Nutrition {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "first_name")
	private String firstName; 
	
	@Column(name = "last_name")
	private String lastName; 
	
	@Column(name = "current_weight")
	private int currentWeight; 
	
	@Column(name = "desired_weight")
	private int desiredWeight; 
	
	private int protein; 
	
	private int carbs; 
	
	private int fat; 
	
	private String notes;
	
	// end of fields 
	
	public Nutrition() {
		
	}

	public Nutrition(int id, String firstName, String lastName, int currentWeight, int desiredWeight, int protein,
			int carbs, int fat, String notes) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.currentWeight = currentWeight;
		this.desiredWeight = desiredWeight;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
		this.notes = notes;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getCurrentWeight() {
		return currentWeight;
	}

	public void setCurrentWeight(int currentWeight) {
		this.currentWeight = currentWeight;
	}

	public int getDesiredWeight() {
		return desiredWeight;
	}

	public void setDesiredWeight(int desiredWeight) {
		this.desiredWeight = desiredWeight;
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
	
}
