import db from '../db/db';

class MealsController {

    getAllMeals(req, res) {
        res.status(200).send({
            success:true,
            message: 'meals successfully retrieved',
            'meals': db
        });
    }
}

const mealsController = new MealsController();
export default mealsController;