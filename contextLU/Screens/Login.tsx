import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useAppCtx} from '../hooks/context';

const Login = () => {
  const {user, login} = useAppCtx();

  return (
    <View style={styles.main}>
      {user ? (
        <Text>{user.username}</Text>
      ) : (
        <>
          <Button
            title="Login with ArmanDev"
            onPress={() => login('ArmanDev')}
          />
          <Button title="Login with Bacilio" onPress={() => login('Bacilio')} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
