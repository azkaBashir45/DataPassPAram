import React, { Component } from 'react';
import { Button, StyleSheet, Text, View,TextInput,Picker } from 'react-native';
class Camera extends Component {
  
    constructor(props) {  
      //constructor to set default state  
      super(props);  
      this.state = {  
           
                data:[
                  {name:"T-Shirt",value:"T-Shirt" , image:`https://images.freecreatives.com/wp-content/uploads/2015/04/SuperMix_07_-01.png`},
                  {name:"Plane-shirt",value:"Plane-shirt" , image:`https://images.freecreatives.com/wp-content/uploads/2015/04/SuperMix_07_-01.png`},
                  {name:"Tie-shirt",value:"Tie-shirt" , image:`https://images.freecreatives.com/wp-content/uploads/2015/04/SuperMix_07_-01.png`}
                ]
        
      };  
  }  
    render(){
      
      return (
        <View style={styles.container}>
        
        <Picker
              
              style={{marginTop:10,height:50,backgroundColor:"#2554c7",color:"#fff"}} selectedValue={this.state.data.name}
             onValueChange={(itemValue,itemIndex)=>{
                 this.setState({pickerstyle:itemValue})}}>
                   <Picker.Item  />
                   {this.state.data.map(x => {
                    return <Picker.Item style={{color:"#fff"}} label={x.name} value={x.value} />
                   })}
             </Picker>

  <Button  
          title="Submit"  
          // color="#00B0FF"  
          onPress={() =>  
          this.props.navigation.navigate('Preview',{data:this.state.data}
          )  
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
    