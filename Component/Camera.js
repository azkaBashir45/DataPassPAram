import React, { Component } from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
class Camera extends Component {
  
    constructor(props) {  
      //constructor to set default state  
      super(props);  
      this.state = {  
            Names:[{
                name:"Azka",Age:34
            }]
      
      };  
  }  
    render(){
      const { navigate } = this.props.navigation;  
      
      return (
        <View style={styles.container}>
            <TextInput  
          value={this.state.username}  
          onChangeText={(name) => this.setState({ name})}  
          placeholder={'Enter Any value'}  
           
          />  
  <Button  
          title="Submit"  
          // color="#00B0FF"  
          onPress={() =>  
          this.props.navigation.navigate('Second', {  
              P1: this.state.Names 
          })  
      }  
          />  
  
  
          
          
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    export default Camera
    