package com.skilldistillery.eventtracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Goals {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "first_name")
	private int firstName; 
	
	@Column(name = "last_name")
	private int lastName; 
	
	@Column(name = "current_weight")
	private int currentWeight; 
	
	@Column(name = "desired_weight")
	private int desiredWeight; 
	
	// end of fields 
	
	public Goals() {
		
	}

	public Goals(int id, int firstName, int lastName, int currentWeight, int desiredWeight) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.currentWeight = currentWeight;
		this.desiredWeight = desiredWeight;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public int getFirstName() {
		return firstName;
	}

	public void setFirstName(int firstName) {
		this.firstName = firstName;
	}

	public int getLastName() {
		return lastName;
	}

	public void setLastName(int lastName) {
		this.lastName = lastName;
	}
	

}
