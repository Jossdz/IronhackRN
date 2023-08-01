import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPersistentData, useAppCtx} from '../hooks/context';

const Settings = () => {
  const {logout} = useAppCtx();
  const [username, setUsername] = useState('');

  useEffect(() => {
    getPersistentData('username').then(user => setUsername(user || ''));
  }, []);

  return (
    <View style={styles.main}>
      {typeof username === 'string' && <Text>{username}</Text>}
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
