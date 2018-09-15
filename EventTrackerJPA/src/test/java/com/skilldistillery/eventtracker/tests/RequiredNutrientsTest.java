package com.skilldistillery.eventtracker.tests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.eventtracker.entities.RequiredNutrients;

class RequiredNutrientsTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private RequiredNutrients required; 
	
	@BeforeAll
	public static void setupAll() {	
		emf = Persistence.createEntityManagerFactory("nutritiondb");
		// 
	}

	@AfterAll
	public static void tearDownAll() {
		emf.close();
	}
	
	@BeforeEach
	public void setUp() throws Exception {
	    em = emf.createEntityManager();
	    required = em.find(RequiredNutrients.class, 1); 
	}

	@AfterEach
	public void tearDown() throws Exception {
		required = null; 
		em.close();
	}
	
	
	@Test
	void test_required() {
		assertEquals(150, required.getCarbs()); 
	}
	
	@Test
	void test_required_to_many_consumed_nutrients() {
		assertEquals(170, required.getConsumed().get(0).getProtein()); 
	}


}
