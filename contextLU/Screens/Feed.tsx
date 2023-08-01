import {View} from 'react-native';
import React from 'react';
// import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
// import {SignedTabNavigator} from '../navigators/SignedNavigator';
import PostsList from '../PostsList';

// type Props = BottomTabScreenProps<SignedTabNavigator, 'feed'>;

const Feed = () => {
  return (
    <View>
      <PostsList />
    </View>
  );
};

export default Feed;
