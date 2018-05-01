import express from 'express';
import MealsController from '../controllers/MealsController';

// Create Router
const router = express.Router();

router.get('/meals', MealsController.getAllMeals);
router.post('/meals', MealsController.createMeal);
router.put('/meals/:id', MealsController.updateMeal);
router.delete('/meals/:id', MealsController.deleteMeal);

export default router;