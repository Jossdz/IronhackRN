import React, {useRef} from 'react';
// import {useAppCtx} from '../hooks/context';

import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {Animated, View, StyleSheet, Text} from 'react-native';

const GA = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  return (
    <>
      <Text>Pan Gesture Handler</Text>
      <GestureHandlerRootView style={styles.container}>
        <PanGestureHandler onGestureEvent={onPanGestureEvent}>
          <Animated.View
            style={[
              styles.box,
              {
                transform: [
                  {
                    translateX: translateX,
                  },
                  {
                    translateY: translateY,
                  },
                ],
              },
            ]}
          />
        </PanGestureHandler>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

const Notifications = () => {
  return (
    <View style={{flex: 1}}>
      <GA />
    </View>
  );
};

export default Notifications;
