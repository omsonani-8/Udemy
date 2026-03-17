
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/es/storage';
import user from './ducks/userLogin';

const persistConfig = {
  key:"User_Detail",
  storage: storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user : user
})

export default persistReducer(persistConfig,rootReducer);