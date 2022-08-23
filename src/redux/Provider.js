import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import initalState from './store';
import reducers from './reducers';

const UseProvider = ({children}) => {
  const store = createStore(reducers, initalState);

  return <Provider store={store}>{children}</Provider>;
};

export default UseProvider;
