import { useEffect, useState } from "react";
import IngredientCard from "./IngredientCard";

function Body() {
    const [ingredientlist, setingredientList] = useState([]);

    useEffect( () => {
    async function fetchItems() {
        const response = await fetch(
            "/cocktail/api/select/select_material_list_all?cate_1=*&cate_2=*&rnum=1&order=k1&cnt=*"
        );

            const result = await response.json();

            setingredientList(result);
    }
    
    fetchItems();
}, []);

    if (ingredientlist.length > 0) {
        return (
            <>
                {
                    ingredientlist.map((ingredient) => (
                        <IngredientCard items = {ingredient}/>
                    ))
                }
            </>
        );
    }

}

export default Body;