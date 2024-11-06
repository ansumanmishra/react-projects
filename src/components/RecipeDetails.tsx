import {Recipe} from '../models/Recipe';

export const RecipeDetails = ({recipe}: { recipe: Recipe }) => {
  return (
    <>
      {recipe && (
        <>
          <h1>{recipe.name}</h1>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '10px'}}>
            <img src={recipe.image} style={{width: '300px'}} alt={recipe.name}/>
            <div>
              <h2>Ingredients:</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <h2>Instructions:</h2>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>

        </>
      )}
    </>
  );
};