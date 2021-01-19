import React, { Component } from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
class Preview extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Text>{this.props.navigation.state.params.P1}</Text>
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
        export default Preview
        