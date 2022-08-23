import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import UseProvider from './src/redux/Provider';

const App = () => {
  return (
    <UseProvider>
      <AppNavigator />
    </UseProvider>
  );
};

export default App;
