import {Todo} from './components/Todo.tsx';
import {Posts} from './components/Posts.tsx';
import {PostDetail} from './components/PostDetail.tsx';
import {Counter} from './components/Counter.tsx';

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem'}}>
      <Counter/>
      <hr/>
      <Todo/>
      <hr/>
      <Posts/>
      <hr/>
      <PostDetail/>
    </div>
  )
}

export default App;