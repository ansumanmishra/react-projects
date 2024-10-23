import Posts from './pages/Posts.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PostsCached from './pages/PostsCached.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      retry: 3,
    },
    mutations: {
      retry: 3,
    }
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React query</h1>
        <h3>Posts</h3>
        <Posts/>

        <h3>Posts cached</h3>
        <PostsCached />
      </div>
    </QueryClientProvider>
  )
}

export default App;