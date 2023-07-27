import React, {createContext, useReducer, useContext} from 'react';

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

export const AppCtxProvider = ({...props}) => {
  const [{user}, dispatch] = useReducer(appReducer, initialReducerValue);

  const login = (username: string) => {
    dispatch({type: 'login', payload: {username}});
  };
  const logout = () => {
    dispatch({type: 'logout'});
  };

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
