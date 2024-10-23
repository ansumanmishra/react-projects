import Posts from './pages/Posts.tsx';
import {Comments} from './pages/Comments.tsx';
import {Suspense} from 'react';

const LoadingPosts = () => {
  return (
    <div>Loading posts...</div>
  )
}

const LoadingComments = () => {
  return (
    <div>Loading comments...</div>
  )
}

const App = () => {
  return (
    <div>
      <Suspense fallback={<LoadingPosts/>}>
        <Posts/>
        <Suspense fallback={<LoadingComments/>}>
          <Comments/>
        </Suspense>
      </Suspense>
    </div>
  )
}

export default App;