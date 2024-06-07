
import {
    createStore,
    applyMiddleware,
  } from 'redux';
  import { routerMiddleware } from 'react-router-redux';
  import {thunk} from 'redux-thunk';
  import history from '../../utils/history';
  import rootReducer from '../reducers';

  const configureStore = (initialState) => {
    const middleware = [];
  
    middleware.push(thunk);
    const router = routerMiddleware(history);
    middleware.push(router);
  
    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
  };
  
  const store = configureStore();
  
  export {
    store,
  };
  