import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootRedcuer from './reducers';

const inittalState = {};

const middlewarde = [thunk];

const store = createStore(
  rootRedcuer,
  inittalState,
  composeWithDevTools(applyMiddleware(...middlewarde))
);

export default store;
