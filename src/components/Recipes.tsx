import {useEffect, useState} from 'react';
import {Recipe} from '../models/Recipe.ts';
import {RecipeDetails} from './RecipeDetails.tsx';
import {RecipeTags} from './RecipeTags.tsx';
import {Box, Paper, Stack} from '@mui/material';

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
    if (tag === 'all') {
      setFilteredRecipes(recipes);
      return;
    }
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
      <Box sx={{ maxWidth: '1680px', mt: 2, mx: 'auto', width: '100%'}}>
        <RecipeTags tags={tags} handleFilterByTag={handleFilterByTag} />
        <Box mt={2} />
        <Stack
          direction="column"
          spacing={2}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {filteredRecipes.map((recipe) => (
            <Paper
              key={recipe.id}
              sx={{
                width: '100%',
                mb: 2,
              }}
            >
              <RecipeDetails recipe={recipe} />
            </Paper>
          ))}
        </Stack>
      </Box>

    </>
  );
};