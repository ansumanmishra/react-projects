import {Chip, styled} from '@mui/material';
import {useState} from 'react';

export const StyledChip = styled(Chip)(({theme}) => {
  return {
  marginRight: theme.spacing(0.5),
}});


export const RecipeTags = ({tags, handleFilterByTag}: { tags: string[], handleFilterByTag: (tag: string) => void }) => {
  const [activeTag, setActiveTag] = useState('all');

  const onClickTag = (tag: string) => {
    setActiveTag(tag);
    handleFilterByTag(tag);
  };

  return (
    <>
      <StyledChip variant={activeTag === 'all' ? 'filled' as 'filled' | 'outlined' : 'outlined'} label={'All'}
                  onClick={() => onClickTag('all')}></StyledChip>
      {tags?.map((tag) => (
        <StyledChip variant={activeTag === tag ? 'filled' as 'filled' | 'outlined' : 'outlined'} label={tag} key={tag}
                    onClick={() => onClickTag(tag)}></StyledChip>
      ))}
    </>
  );
};