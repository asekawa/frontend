import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export class MapView extends React.Component {
  static navigationOption = {
    header: null,
  };
  constructor() {
    super();
    this.state = {sampleText: 'Accept'};
    this.state = {buttonDisable: false};
  }
  AcceptedButton = () => {
    this.setState({sampleText: 'Accepted'});

    //buttonDisable:!this.state.buttonDisable,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'blue', fontSize: 20, textAlign: 'left'}}>
          MapView {'\n'}</Text>
       

         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});
