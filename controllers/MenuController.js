import menus from '../db/Menu';
import meals from '../db/Meals';


class MenuController {

    getMenuForTheDay(req, res) {

        const date = "2018-04-14";
        const menu = menus.find(menuItem => menuItem.date === date);

        if (!menu) {
            return res.status(404).send({
                success:false,
                message:'No such menu item in database'
            });
        }

        return res.status(200).send({
            success: true,
            message: 'menu successfully retrieved',
            "menu": menu
        });
    }

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