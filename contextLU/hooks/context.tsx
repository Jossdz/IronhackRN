import React, {createContext, useReducer, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  username: string;
};

type ReducerState = {
  user: User | null;
};

type CtxState = {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
};

type Action =
  | {
      type: 'login';
      payload: {username: string};
    }
  | {type: 'logout'};

const initialReducerValue = {user: null, login: () => {}};
const initialCtxValue = {user: null, login: () => {}, logout: () => {}};

const AppCtx = createContext<CtxState>(initialCtxValue);

const appReducer = (state: ReducerState, action: Action): ReducerState => {
  switch (action.type) {
    case 'login':
      return {...state, user: {username: action.payload.username}};
    case 'logout':
      return {...state, user: null};

    default:
      return state;
  }
};

async function savePersistentData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
}
export async function getPersistentData(key: string) {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const AppCtxProvider = ({...props}) => {
  const [{user}, dispatch] = useReducer(appReducer, initialReducerValue);

  const login = (username: string) => {
    savePersistentData('username', username);
    dispatch({type: 'login', payload: {username}});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  useEffect(() => {
    getPersistentData('username').then(userData => {
      if (userData) {
        dispatch({type: 'login', payload: {username: userData}});
      }
    });
  }, []);
  const value = {user, login, logout};

  return <AppCtx.Provider {...props} value={value} />;
};

export const useAppCtx = () => {
  const ctxValue = useContext(AppCtx);

  if (!ctxValue) {
    throw new Error('useAppCtx must be use within the AppCtxProvider');
  }

  return ctxValue;
};
