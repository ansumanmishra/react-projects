import {useEffect, useState} from 'react';
import {Recipe} from '../models/Recipe.ts';
import {RecipeDetails} from './RecipeDetails.tsx';
import {RecipeTags} from './RecipeTags.tsx';

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  flexFlow: 'row wrap',
  gap: '20px',
  justifyContent: 'space-around'
}

const containerStyle = {
  margin: '0 auto',
  maxWidth: '1680px',
  width: '100%',
  border: '1px solid rgb(248 248 248 / 87%)',
  background: 'rgb(248 245 245 / 87%)',
  padding: '20px',
}

const recipeContainer = {
  width: '45%',
  border: '1px solid #e4dbdb',
  borderRadius: '5px',
  padding: '10px',
  background: 'white'
}

export const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const tags = Array.from(new Set<string>(recipes.flatMap((recipe) => recipe.tags)));

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes?limit=10');
        const data = await response.json();
        setRecipes(data.recipes as Recipe[]);
        setFilteredRecipes(data.recipes as Recipe[]);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      } finally {
        setLoading(false);
      }
    };
    getRecipes();
  }, []);

  const handleFilterByTag = (tag: string) => {
    const filteredRecipes = recipes.filter((recipe) => recipe.tags.includes(tag));
    setFilteredRecipes(filteredRecipes);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <>
      <div style={containerStyle}>
        <RecipeTags tags={tags} handleFilterByTag={handleFilterByTag}/>
        <div style={style}>
          {filteredRecipes.map((recipe) => (
            <div style={recipeContainer} key={recipe.id}><RecipeDetails recipe={recipe}/></div>
          ))}
        </div>
      </div>
    </>
  );
};