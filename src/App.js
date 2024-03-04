import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './router/routes';
const App = () => {
  return (
    <div className='font-serif text-secondary'>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;