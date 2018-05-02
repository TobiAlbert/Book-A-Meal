import express from 'express';
import MealsController from '../controllers/MealsController';
import MenuController from '../controllers/MenuController';

// Create Router
const router = express.Router();

// Meals
router.get('/meals', MealsController.getAllMeals);
router.post('/meals', MealsController.createMeal);
router.put('/meals/:id', MealsController.updateMeal);
router.delete('/meals/:id', MealsController.deleteMeal);

// Menus
router.post('/menu', MenuController.createMenu);

export default router;