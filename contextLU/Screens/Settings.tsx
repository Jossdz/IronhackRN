import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppCtx} from '../hooks/context';

const Settings = () => {
  const {logout} = useAppCtx();

  return (
    <View style={styles.main}>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
