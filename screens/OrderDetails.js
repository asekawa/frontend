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

export class OrderDetails extends React.Component {
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
          Order details {'\n'}
        </Text>
        <Text style={{color: 'blue', fontSize: 20, textAlign: 'left'}}>
          Order Number:{'\n'}
        </Text>
        <Text style={{color: 'blue', fontSize: 20, textAlign: 'left'}}>
          customer name{'\n'}
        </Text>
        <Text style={{color: 'blue', fontSize: 20, textAlign: 'left'}}>
          Items:{'\n'}
        </Text>
        <View style={{flexDirection:'row'}}>
        <View>
        <Text style={{color: 'blue', fontSize: 20, textAlign: 'left'}}>
          location{'\n'}
        </Text>
        </View>
        <View>
        <TouchableOpacity   style={styles.buttonM}
          onPress={()=>this.props.navigation.navigate('MapView')}>
       
          <Text style={styles.txt}>show </Text>
        </TouchableOpacity>

        </View>
        </View>
        
        
        <TouchableOpacity  style={styles.button}>
          
          <Text style={styles.txt}>Accept</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>
          <Text style={styles.txt}>Add Notes</Text>
        </TouchableOpacity>
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
  tab: {
    backgroundColor: '#123894',
    width: '100%',
    height: 50,
    marginTop: 210,
  },
  button: {
    margin: 6,
    width: '30%',
    height: 40,
    backgroundColor: '#35D073',
    textAlign: 'center',
    elevation: 3,
  },
  buttonM:{
    width:70,
    height:50,
    backgroundColor:'#93ce92',
    marginLeft:50,
  },
  txt: {
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
