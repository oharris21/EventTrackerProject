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

import com.skilldistillery.eventtracker.entities.ConsumedNutrients;

class ConsumedNutrientsTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private ConsumedNutrients consumed; 
	
	@BeforeAll
	public static void setupAll() {	
		emf = Persistence.createEntityManagerFactory("nutritiondb");
	}

	@AfterAll
	public static void tearDownAll() {
		emf.close();
	}
	
	@BeforeEach
	public void setUp() throws Exception {
	    em = emf.createEntityManager();
	    consumed = em.find(ConsumedNutrients.class, 1); 
	}

	@AfterEach
	public void tearDown() throws Exception {
		consumed = null; 
		em.close();
	}
	
	
	@Test
	void test_consumed_nutrients() {
		assertEquals(); 
	}
	
	@Test
	void test_consumed_nutrients_has_list_of_required_nutrients() {
		assertEquals(); 
	}


}
