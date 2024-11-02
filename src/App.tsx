import {PostsList} from './pages/posts/PostsList.tsx';
import {CreatePost} from './pages/posts/CreatePost.tsx';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <CreatePost />
      <PostsList />

    </div>
  )
}

export default App;