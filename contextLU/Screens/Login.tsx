import {View, Button, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {useAppCtx} from '../hooks/context';
import {useForm, Controller} from 'react-hook-form';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {login} = useAppCtx();
  const {control, handleSubmit} = useForm<FormData>();

  const onHandleSubmit = (data: FormData) => {
    login(data.username);
  };

  return (
    <View style={styles.main}>
      <Controller
        control={control}
        name="username"
        render={({field: {value, onChange}}) => {
          return (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="Username"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {value, onChange}}) => {
          return (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="***"
              secureTextEntry
            />
          );
        }}
      />
      <Button title="Login" onPress={handleSubmit(onHandleSubmit)} />
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
