import React from 'react';
import AppRoutes from './pages/Routes/AppRoutes';
import store from './store/store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  );
};

export default App;