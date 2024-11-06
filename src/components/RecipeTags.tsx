export const RecipeTags = ({tags, handleFilterByTag}: { tags: string[], handleFilterByTag: (tag: string) => void }) => {

  const style = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#f8f8f8',
    color: '#333',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '3px',
    cursor: 'pointer',
  }

  return (
    <>
      {tags?.map((tag) => (
        <span key={tag} style={style} onClick={() => handleFilterByTag(tag)}>
          {tag}
        </span>
      ))}
    </>
  );
};