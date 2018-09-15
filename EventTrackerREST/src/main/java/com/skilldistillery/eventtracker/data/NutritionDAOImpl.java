package com.skilldistillery.eventtracker.data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.*;

@Transactional
@Service
public class NutritionDAOImpl implements NutritionDAO{
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Nutrition> findAll() {
		String query = "SELECT n FROM Nutrition n";
		return em.createQuery(query, Nutrition.class).getResultList();
	}

	@Override
	public Nutrition findById(int id) {
		return em.find(Nutrition.class, id); 
	}

	@Override
	public Nutrition create(Nutrition n) {
		n.setFirstName(n.getFirstName());
		n.setLastName(n.getLastName());
		n.setCurrentWeight(n.getCurrentWeight());
		n.setDesiredWeight(n.getDesiredWeight());
		n.setProtein(n.getProtein());
		n.setCarbs(n.getCarbs());
		n.setFat(n.getFat());
		n.setNotes(n.getNotes());
		try {
			em.persist(n);
			em.flush();
			return n;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Nutrition replaceById(int id) {
		Nutrition n = em.find(Nutrition.class, id);
		n.setFirstName(n.getFirstName());
		n.setLastName(n.getLastName());
		n.setCurrentWeight(n.getCurrentWeight());
		n.setDesiredWeight(n.getDesiredWeight());
		n.setProtein(n.getProtein());
		n.setCarbs(n.getCarbs());
		n.setFat(n.getFat());
		n.setNotes(n.getNotes());
		try {
			em.persist(n);
			em.flush();
			return n;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Nutrition updateById(int id, Nutrition updateNutrition) {
		Nutrition n = em.find(Nutrition.class, id);
		if (updateNutrition.getFirstName() != null) {
			n.setFirstName(n.getFirstName());
		}
		if (updateNutrition.getLastName() != null) {
			n.setLastName(n.getLastName());
		}
		if (updateNutrition.getCurrentWeight() != 0) {
			n.setCurrentWeight(n.getCurrentWeight());
		}
		if (updateNutrition.getDesiredWeight() != 0) {
			n.setDesiredWeight(n.getDesiredWeight());
		}
		if (updateNutrition.getProtein() != 0) {
			n.setProtein(n.getProtein());
		}
		if (updateNutrition.getCarbs() != 0) {
			n.setCarbs(n.getCarbs());
		}
		if (updateNutrition.getFat() != 0) {
			n.setFat(n.getFat());
		}
		if (updateNutrition.getNotes() != null) {
			n.setNotes(n.getNotes());
		}
		try {
			em.persist(n);
			em.flush();
			return n;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public boolean delete(int id) {
		Nutrition n = em.find(Nutrition.class, id);
		em.remove(n);
		if (n.getFirstName() == null) {
			return true;
		} else {
			return false;
		}
	}
	
}
