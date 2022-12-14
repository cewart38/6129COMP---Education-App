import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, Image, Pressable, Linking, Text, TextInput, TouchableOpacity, Button, } from 'react-native';
//import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      secureTextEntry : true,
    };
  }

  // check if the user is already logged in or not
  componentDidMount() {
    //Get user email from local storage
    AsyncStorage.getItem("Email").then(data => {
      if (data) {
        //if user email has data -> email
        this.props.navigation.navigate("HomePage", {email: JSON.parse(data) }); // Navigate to home page
      }
    })
  }



 // Code to send and receieve data with php being back-end
  RegDataInDB =() => { 
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email.length==0) || (Password.length==0)) {
      alert("Error - Required Field Is Missing!");
    } else {

      var Data ={
        Email: Email,
        Password: Password
      };

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };

        // IMPORTANT IMPORTANT --> REPLACE THE FOLLOWING LINE WITH YOUR IP ADDRESS AND LOCATION TO THE SIGNIN PAGE
        fetch("http://192.168.0.232/6129COMP/6129COMP---Education-App/loginsignup/signin.php",{    
//        fetch("http://sql8.freemysqlhosting.net/https://github.com/cewart38/6129COMP---Education-App/blob/master/loginsignup/signin.js",{    
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
       alert(Response[0].Message)
        if (Response[0].Message == "Logged In Successfully") {
          AsyncStorage.setItem("Email", JSON.stringify(Email));
          this.props.navigation.navigate("HomePage", {Email: Email});
        }
      })
      .catch((error)=>{console.error("ERROR:" + error);})
    }
  }

//app layout
  render() {
    return (

      <View style={styles1.AppStyle}>

          <View style={styles1.stretch1}>  
               <Image style={styles1.stretch2} source={require('./QuizAppLogo.png')} />
          </View> 

          <View style={styles1.TextInView}>
            <TextInput
                placeholder="Enter Email"
                style={styles1.textInput}
                onChangeText={email=>this.setState({email})}
              />
          </View>

         <View style={styles1.TextInView}>
              <TextInput
                placeholder="Enter Password"
                style={styles1.textInput}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                onChangeText={password=>this.setState({password})}
              />
                <TouchableOpacity
                  onPress={() =>this.setState({secureTextEntry: !this.state.secureTextEntry})}>  
                  
                </TouchableOpacity> 
          </View>


                <View style={styles1.ButtonView}>    
                  <Pressable
                    style={styles1.Button} 
                    onPress={()=>{this.RegDataInDB()}}
                    >
                    <Text style={styles1.text}>LOGIN</Text>
                  </Pressable>

                </View> 

                <View style={styles1.ButtonView}>
                   <Pressable
                    style={styles1.Button} 
                    onPress={()=>{this.props.navigation.navigate("SignUpPage")}}
                    >
                    <Text style={styles1.text}>SIGN UP</Text>
                  </Pressable>   
               
                </View>
                
                <View style={styles1.ButtonView}>
                   <Pressable
                    style={styles1.Button2} 
                    onPress={()=>{this.props.navigation.navigate("AdminSignInPage")}}
                    >
                    <Text style={styles1.text}>ADMIN PANEL LOGIN</Text>
                  </Pressable>   
               
                </View>


                
      </View>
    );
  }
}


//style section
const styles1 = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    
    buttonContainer: {  
        margin: 20  
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
        width: 320,
        height: 200,
        margin: 10,
        resizeMode: '',
    },
    
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    TextInView: {
      flexDirection: 'row',
      marginTop: 6,
      paddingBottom: 3,
      width: '95%',
      padding: 1,
    },

    text: {
        color: 'white',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
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
      //flex: 1,
      margin: 5,
      padding: 1,
      alignItems: 'center',
      //fontWeights: 'bold',
      justifyContent: 'center',
      fontSize: 15,
      //backgroundColor: 'pink',
      width: 300,
      height: 20,
    },

    AppBar3: {
      //flex: 1,
      margin: 5,
      padding: 1,
      alignItems: 'center',
      //fontWeights: 'bold',
      justifyContent: 'center',
      fontSize: 15,
      //backgroundColor: 'pink',
      width: 300,
      height: 20,
    },
    


    AppStyle:{
      flex: 1,
      padding: 20,
      marginTop: 0,
      paddingBottom: 3,
      width: '100%',
      backgroundColor: 'yellow',
    },



      ButtonView: {
         marginTop: 10,
         alignItems: 'center',
      },
     
      Button: {
       // marginTop: 30,
       // marginBottom: 20,
       borderRadius: 25,
       height: 50,
       backgroundColor: "#268001",
       color: 'white',
       justifyContent: 'center', 
       alignItems: 'center',  
       width: '80%',
       //width: 80,
      },

      Button2: {
        // marginTop: 30,
        // marginBottom: 20,
        borderRadius: 25,
        marginTop: 100,
        height: 50,
        backgroundColor: "#268001",
        color: 'white',
        justifyContent: 'center', 
        alignItems: 'center',  
        width: '80%',
        //width: 80,
       },
    
      textInput:{
        flex: 1,
		    height: 30,
        marginBottom: 20,
        fontSize: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,

      },

})  