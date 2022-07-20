import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice.js";

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch=useDispatch();
    return(
        <div>
            <p onClick={() => {dispatch(filterCategory(category))}} 
            className={selectedCategory === category ? 'categoryButton categoryButtonSelected' : 'categoryButton'}>{category}</p>
        </div>
    )
}

export default Filter;