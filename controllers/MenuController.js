import menu from '../db/Menu';
import meals from '../db/Meals';


class MenuController {

    createMenu(req, res) {
        const {
            mealOptions,
            caterer,
            date
        } = req.body;

        if (!meals) {
            return res.status(400).send({
                success:false,
                message:'Ensure you have created a meal to add'
            });
        }

        const newMenu = {
            id: meals.length + 1,
            mealOptions,
            caterer,
            date
        };

        menu.push(newMenu);

        return res.status(201).send({
            success: true,
            message: 'menu successfully created',
            "menu":menu
        });
    }
}


const menuController = new MenuController();
export default menuController;