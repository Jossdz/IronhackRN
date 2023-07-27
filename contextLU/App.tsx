import React from 'react';
import {AppCtxProvider} from './hooks/context';

import {NavigationContainer} from '@react-navigation/native';
import SetNavigator from './SetNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppCtxProvider>
        <SetNavigator />
      </AppCtxProvider>
    </NavigationContainer>
  );
};

export default App;
