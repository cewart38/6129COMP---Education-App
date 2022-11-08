import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View, Image, TextInput, Text, Linking, Pressable, TouchableOpacity, AsyncStorageStatic} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import examPaper from '../assets/images/examppaper.png';

export default class ButtonBasics extends Component {  

  LogoutDB = () => {

    var Data ={
    
    };
    
    var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    };
            
  fetch("http://192.168.0.232/6129COMP/6129COMP---Education-App/loginsignup/signout.php",{  
//    fetch("http://sql8.freemysqlhosting.net/https://github.com/cewart38/6129COMP---Education-App/blob/master/loginsignup/signout.php",{  
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
    })
    this.props.navigation.navigate("SignInPage");

   }

    render() {  
        return (  
 
            <View style={styles.container}>  
                <View style={styles.AppBar5}>
                   <Text style={styles.AppBar2}>Autism Quiz App</Text>
                   <Text style={styles.AppBar2}>Welcome Username! </Text>
                </View>

                <View style={styles.stretch1}>  
                   <Image style={styles.stretch2} source={require('../assets/images/examppaper.png')}/>
                </View> 


                <View style={styles.container2}>
                <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image source={require("../assets/images/examppaper.png")}
            style={styles.buttonImageIconStyle} />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Take A Quiz
          </Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.container2}>
                <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image source={require("../assets/images/AGrade.png")}
            style={styles.buttonImageIconStyle} />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            View Scores
          </Text>
        </TouchableOpacity>
      </View>
                
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={()=>{this.LogoutDB()}}  
                        title="LOG OUT"  
                        color="#009933"  
                    />  
                </View> 

                <View style={styles.AppBar1}>
                   <Text style={styles.AppBar2}>6129COMP - Mobile Quiz App </Text>
                </View>
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: 'yellow',
        //justifyContent: 'center',  
    },  
    
    buttonContainer: {  
        margin: 20 , 
        borderWidth: 2,

    },  
    
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    },
    
    stretch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 700,
        height: 200,
        margin: 10,
        resizeMode: 'stretch',
    },
    
    stretch1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    stretch2: {
        width: 400,
        height: 160,
        margin: 10,
        resizeMode: 'stretch',
        borderWidth: 2,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
    },

    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },

    AppBar1: {
	//flex: 1,
    //appen: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
	//textcolor: 'red',
    //alignItems:'center',
        justifyContent:'center',
		backgroundColor: 'pink',
	//color: 'red', 
	//fontSize: 26 ,
    },

    AppBar2: {
    margin: 5,
    padding: 1,
//    alignItems: 'center',
//    justifyContent: 'center',
    fontSize: 15,
//    width: 330,
    height: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: 'pink',   
    //fontWeights: 'bold',     
    //flex: 1,    
    },

    AppBar3: {
    //flex: 1,
    margin: 5,
    padding: 1,
    alignItems: 'center',
    //fontWeights: 'bold',
    justifyContent: 'center',
    fontSize: 15,
    // backgroundColor: 'pink',
    width: 300,
    height: 20,
    },
    
    AppBar4: {
    //flex: 1,
    margin: 7,
    padding: 1,
    alignItems: 'center',
    //fontWeights: 'bold',
    justifyContent: 'center',
    textAlign: 'justify',
    fontSize: 15,
    //backgroundColor: 'pink',
    width: 330,
    height: 60,
    },
    
    AppBar5: {
        //justifyContent:'center',
        padding: 20,
		backgroundColor: '#25F4CB',
    },
    
    Iconn: {
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between' , 
      },

    ButtonView: {
        alignItems: 'center',
        marginTop: 10,
    },

    Button: {
        // marginTop: 30,
        // marginBottom: 20,
        borderRadius: 25,
        height: 50,
        backgroundColor: "#25F4CB",
        color: 'white',
        justifyContent: 'center', 
        alignItems: 'center',  
        width: '80%', 
        //width: 80,
       },

    Text2: {
        marginHorizontal: 8,
    },

    ImageSourceOne: {
        height: 50,
        width: 30,
    },  

    ButtonView2: {
        alignItems: 'center',
        marginTop: 10,
        flex: 1,
    //  flexDirection: "row",
        textAlign: "center",
    },

    container2: {
        //flex: 1,
        margin: 10,
        marginTop: 5,
        padding: 10,

      },
      
      buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 75,
        borderRadius: 5,
        margin: 5,
      },

      buttonImageIconStyle: {
        padding: 50,
        margin: 5,
        height: 25,
        width: 25,
 //     resizeMode: 'stretch',
      },
      
      buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
        fontSize: 35,
      },
      
      buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
      },


    
})  