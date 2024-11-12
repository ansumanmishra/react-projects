import {Recipe} from '../models/Recipe';
import {Box, List, ListItem, Stack, styled, Typography} from '@mui/material';

const StyledList = styled(List)( ({direction, theme}) => {
  return {
    display: 'flex',
    flexDirection: direction || 'row',
    alignItems: 'stretch',
    gap: theme?.spacing(1),
    '& .MuiListItem-root': {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius,
      border: '1px solid gray',
    },
  }
});

export const RecipeDetails = ({recipe}: { recipe: Recipe }) => {
  return (
    <>
      {recipe && (
        <>
          <Box spacing={2} p={2}>
            <Typography variant="h5" marginBottom={1}>{recipe.name}</Typography>
            <Box>
              <Stack spacing={1} direction="row" alignItems="flex-start">
                <img src={recipe.image} style={{width: '300px'}} alt={recipe.name}/>
                <Stack>
                  <Typography variant="h6">Ingredients:</Typography>
                  <StyledList>
                    {recipe.ingredients.map((ingredient, index) => (
                      <ListItem key={index}><Typography variant="subtitle2">{ingredient}</Typography></ListItem>
                    ))}
                  </StyledList>

                  <Typography variant="h6">Instructions:</Typography>
                  <List>
                    {recipe.instructions.map((instruction, index) => (
                      <ListItem key={index}>
                        <Typography variant="body2">{instruction}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};