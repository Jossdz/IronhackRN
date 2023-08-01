import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const Counter = ({initialValue}: {initialValue: number}) => {
  const [counter, setCounter] = useState(initialValue);

  return (
    <View testID="counter">
      <Button
        title="-"
        testID="decrease"
        onPress={() => setCounter(c => c - 1)}
      />
      <Text testID="counter-count">{counter}</Text>
      <Button
        title="+"
        testID="increase"
        onPress={() => setCounter(c => c + 1)}
      />
    </View>
  );
};

export default Counter;
