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

import com.skilldistillery.eventtracker.entities.Goals;

class GoalsTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Goals goals; 
	
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
	    goals = em.find(Goals.class, 1); 
	}

	@AfterEach
	public void tearDown() throws Exception {
		goals = null; 
		em.close();
	}
	
	
	@Test
	void test_goals() {
		assertEquals("Mike", goals.getFirstName()); 
	}


}
