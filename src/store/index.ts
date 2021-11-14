import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
// import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const fetch = axios.create({ baseURL: process.env.REACT_APP_API_URL });
