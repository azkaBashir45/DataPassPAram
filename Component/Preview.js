import React, { Component } from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';
class Preview extends Component {
    render(){
        const { navigation, route  } = this.props;  
      console.log(navigation , route)
      const { data } = route.params ? route.params : {data:[]} // null, undefine , '', 

        return (
            <View style={styles.container}>
              <Text>{data.length > 0 ? data.name : ''}
              </Text>
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
        