const IngredientCard = (props) => {
    return (
        <div className="container">
            <div className="image-container">
                <img
                    // className="ingredient-image"
                    src={props.items.PHOTO}
                    alt={props.items.NAME_KOR}
                />
            </div>
            <div clasName="description-container">
                <div>{props.items.NAME_KOR}</div>
                <div>{props.items.COMMENTS}</div>
            </div>
        </div>
    );
};

export default IngredientCard;