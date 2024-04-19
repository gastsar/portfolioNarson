import Error from '../pages/Error';
import Home from '../pages/Home';

export default [
  { path: '/', element: <Home/>, },
  { path: '*', element: <Error/> }

];
