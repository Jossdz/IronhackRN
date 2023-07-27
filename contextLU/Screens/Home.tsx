import {View, Button} from 'react-native';
import React from 'react';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigators/UnsignedNavigator';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'home'>;

const Home = ({navigation}: Props) => {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('login')} />
    </View>
  );
};

export default Home;
