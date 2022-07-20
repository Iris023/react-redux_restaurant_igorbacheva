import DataDishes from "../../data/DataDishes";
import EveryDish from "./EveryDish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice.js";

export const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            <h1>THE DISHES</h1>
            {DataDishes
            .filter(dish => {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === dish.category
            })
            .map((dish, id) => (
                <EveryDish dish={dish} key={id}/>))}
        </div>
    )
}
