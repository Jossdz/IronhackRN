// import React from 'react';
// import {ActivityIndicator, View} from 'react-native';
// import FlatL from '../FlatL';
// // import {View, ScrollView, StyleSheet, Dimensions} from 'react-native';

// // const windowHeight = Dimensions.get('window').height;

// // function ScrollV() {
// //   return (
// //     <ScrollView style={styles.container}>
// //       <View style={[styles.box, styles.firstBox]}></View>
// //       <View style={[styles.box, styles.secondBox]}></View>
// //       <View style={[styles.box, styles.thirdBox]}></View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingTop: 20,
// //     padding: 8,
// //   },
// //   box: {
// //     width: 300,
// //     height: windowHeight / 2,
// //   },
// //   firstBox: {
// //     backgroundColor: 'black',
// //   },
// //   secondBox: {
// //     backgroundColor: 'blue',
// //   },
// //   thirdBox: {
// //     backgroundColor: 'green',
// //   },
// // });

// const Search = () => {
//   return (
//     <View style={{flex: 1}}>
//       <ActivityIndicator />
//       <ActivityIndicator size="" />
//       <ActivityIndicator size="small" color="#0000ff" />
//       <ActivityIndicator size="large" color="#00ff00" />
//     </View>
//   );
// };

// export default Search;

import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const Search = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Search;
