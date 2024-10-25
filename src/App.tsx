import {createBrowserRouter, Outlet} from 'react-router-dom';
import './App.css';
import {About} from './pages/About.tsx';
import {RouterProvider} from 'react-router';
import {Header} from './pages/Header.tsx';
import {Footer} from './pages/Footer.tsx';
import {Home} from './pages/Home.tsx';
import {Contact} from './pages/Contact.tsx';
import {JobsListing} from './pages/JobsListing.tsx';
import {lazy, Suspense} from 'react';
import {Posts} from './pages/Posts.tsx';
import {PostsLoader} from './api/posts-loader.ts';
import {Error} from './Error.tsx';
import {PostDetail} from './pages/PostDetail.tsx';

const Layout = () => (
  <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </>
);
const Jobs = lazy(() => import('./pages/Jobs')); // Lazy load Jobs component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: '/posts',
        loader: PostsLoader,
        errorElement: <Error />,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Posts/>
          </Suspense>
        ),
        children: [
          {
            path: ':postId',
            element: <PostDetail />
          }
        ]
      },
      {
        path: 'jobs',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Jobs/>
          </Suspense>
        ), children: [
          {
            path: ':jobId',
            element: <JobsListing/>
          }
        ]
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;