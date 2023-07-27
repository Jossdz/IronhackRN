import React from 'react';
import {useAppCtx} from './hooks/context';
import SignedNavigator from './navigators/SignedNavigator';
import UnsignedNavigator from './navigators/UnsignedNavigator';

const SetNavigator = () => {
  const {user} = useAppCtx();
  return user?.username ? <SignedNavigator /> : <UnsignedNavigator />;
};

export default SetNavigator;
