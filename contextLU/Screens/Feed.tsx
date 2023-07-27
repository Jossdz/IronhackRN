import {View, Text} from 'react-native';
import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {SignedTabNavigator} from '../navigators/SignedNavigator';

type Props = BottomTabScreenProps<SignedTabNavigator, 'feed'>;

const Feed = ({route}: Props) => {
  return (
    <View>
      <Text>{route.params?.username} Feed</Text>
    </View>
  );
};

export default Feed;
