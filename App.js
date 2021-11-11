import React, { useState } from 'react';
import { Text, View, StyleSheet , Button , TouchableOpacity , TouchableHighlight , TextInput , Image} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Divider } from 'react-native-elements';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
   const [btn1, setbtn1 ] = useState('1');
   const [btn2, setbtn2 ] = useState('2');
   const [btn3, setbtn3 ] = useState('3');
   const [btn4, setbtn4 ] = useState('4');
   const [btn5, setbtn5 ] = useState('5');
   const [btn6, setbtn6 ] = useState('6');
   const [btn7, setbtn7 ] = useState('7');
   const [btn8, setbtn8 ] = useState('8');
   const [btn9, setbtn9 ] = useState('9');
   const [btn0, setbtn0 ] = useState('0');
   const [input, setinput ] = useState(' ');
   const [random,setrandom] = useState(Math.floor(Math.random() * 10) + 1);
   const [showHint,setShowHint] = useState(1);
   const [attempts,setattempts] = useState(5);
   const [refresh , setrefresh] = useState();
   const [guess , setguess] = useState();
   const [score , setscore] = useState(10);

  const Stack = createStackNavigator();
  return (
    
       <View style={styles.container}> 
       <Text style={{fontSize:30}}>
        Guess Game 
        
       </Text>
        <Text style={{fontSize:15,marginBottom:40}}>
        Guess a number between 1 and 10 
        
       </Text>
       <View style={{borderWidth: 1.5, borderColor: "#653294", backgroundColor:'#8675a9'}}> 
        <Text style={{fontSize:20 , color:'white'}}>Score : {score}</Text>
       <Text style={{fontSize:20 , color:'white'}}>Attempts : {attempts}</Text>
       <Text style={{fontSize:20 , color:'white'}}>Hint : {showHint}</Text>
       <Text style={{fontSize:20 , color:'white'}}>Guess : {guess}</Text>
       </View>
      
        <TextInput style={styles.inputField}>
            <Text style={{flexDirection:'row-reverse', fontSize:30}}>{input}</Text>
        </TextInput>
        <Divider style={styles.divider} />
        <Divider style={styles.divider} />
        <Divider style={styles.divider} />
        <Divider style={styles.divider} />
        <View  style={styles.keypadRow}>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(1,input ,setinput)}}
          >
            <Text style={styles.keypadButtonText}>1</Text>
           
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(2,input ,setinput)}}
          >
              <Text style={styles.keypadButtonText}>2</Text>
              
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(3,input ,setinput)}}
          >
            <Text style={styles.keypadButtonText}>3</Text>
           
          </TouchableOpacity> 
        </View>
        <Divider style={styles.divider} />

        <View  style={styles.keypadRow}>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(4,input ,setinput)}}
           >
            <Text style={styles.keypadButtonText}>4</Text>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(5,input ,setinput)}}
          >
              <Text style={styles.keypadButtonText}>5</Text>
             
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(6,input ,setinput)}}
          >
            <Text style={styles.keypadButtonText}>6</Text>
           
          </TouchableOpacity> 
        </View>
        <Divider style={styles.divider} />

         <View  style={styles.keypadRow}>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(7,input ,setinput)}}
           >
            <Text style={styles.keypadButtonText}>7</Text>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(8,input ,setinput)}}
          >
              <Text style={styles.keypadButtonText}>8</Text>
             
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(9,input ,setinput)}}
          >
            <Text style={styles.keypadButtonText}>9</Text>
           
          </TouchableOpacity> 
        </View>

           <Divider style={styles.divider} />

            <View  style={styles.keypadRow}>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{inputfun(0,input ,setinput)}}
           >
            <Text style={styles.keypadButtonText}>0</Text>
          
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{clearInput(input,setinput)}}
          >
              <Text style={styles.keypadButtonText}>CE</Text>
             
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}
           onPress={()=>{backkey(input,setinput)}}
          >
          <Text style={styles.keypadButtonText}> - </Text>
           
          </TouchableOpacity> 
        </View>


           <Divider style={styles.divider} />
            <View  style={styles.keypadRow}>
          <TouchableOpacity style={{width:100, backgroundColor:'#f78da7',    margintop: 40 , borderWidth: 1.5,borderColor: "#653294",}}
           onPress={()=>{hint(random,setShowHint,score ,setscore)}}
          >
            <Text style={styles.keypadButtonText}>HINT</Text>
           
          </TouchableOpacity> 
          <TouchableOpacity style={{width:110, backgroundColor:'#f78da7',    marginleft: 40 , borderWidth: 1.5,borderColor: "#653294"}}
           onPress={()=>{guessfun(input , setinput , attempts ,setattempts, random, setguess,score ,setscore ,setShowHint,setrandom)}}
          >
            <Text style={styles.keypadButtonText}>GUESS</Text>
           
          </TouchableOpacity> 
        </View>



         <Divider style={styles.divider} />
            <View  style={styles.keypadRow}>
          <TouchableOpacity style={{width:150, backgroundColor:'#f78da7',    marginleft: 40, borderWidth: 1.5, borderColor: "#653294",}}
           onPress={()=>{refreshAll(setinput,setattempts,setShowHint,setrandom,setguess,setscore)}}
          >
            <Text style={styles.keypadButtonText}>REFRESH</Text>
           
          </TouchableOpacity> 
        </View>
        

        
        
    
        </View>     
  )
}

function inputfun(btn ,input , setinputfun){
    setinputfun(input+btn);
}

function guessfun(input , setinput,attempts,setattempts ,random , setguess,score ,setscore,setShowHint,setrandom){
 
      if (parseInt(input) == random){
        setguess('Correct : '+input + 'press refresh')
       
    }
    else{
      setguess("Wrong")
    }
    if (attempts == 0 ){
      refreshAll(setinput,setattempts,setShowHint,setrandom,setguess,setscore)
    }
    setinput(' ')
    reduceAttemps(attempts,setattempts);
    setscore(score-1);

}
function hint(random,setShowHint,score ,setscore){
  if (random>5){
    setShowHint('number is > 5')

  }
   else {
    setShowHint('number is < 5')

  }
    scoreChecker(score,setscore)
}
function refreshAll(setinput,setattempts,setShowHint,setrandom,setguess,setscore){
  setinput('');
  setattempts(5);
  setShowHint();
  setrandom(Math.floor(Math.random() * 10) + 1);
  setguess();
  setscore(10)

}
function reduceAttemps(attempts,setattempts){
  setattempts(attempts-1);
}
function backkey(input , setinput){
  var inputCut = input.slice(0,input.length-1);
  setinput(inputCut);
}
function clearInput(input,setinput){
  setinput("");
}
function scoreChecker(score ,setscore){
    setscore(score-5);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor:'#bffcae',
    alignItems:'center'
   
  },
  inputField:{
    width:300,
    backgroundColor:"#c3aed6",
    height:50,
    borderColor:'#653294',
    borderWidth:3,
    marginBottom:-70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius:20 ,
    borderBottomRightRadius:20
  },
  keypadRow:{
    flexDirection:'row'
  },
  divider:{
    height:20
  },
  keypadButton:{
    width:70,
    height:70,
    
    alignItems: "center",
    backgroundColor: "#c3aed6",
    padding: 10,
    borderWidth: 1.5,
    borderColor: "#653294",
    marginRight:20,
    margintop:10
    
   },
  keypadButtonText:{
    textAlign:'center',
    color:'#1d2d50',
    textAlignVertical:'center',
    fontSize:30,
    fontWeight:'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f78da7",
    padding: 10,
    margintop:10
  },
  startButtonText: {
    fontSize:30,
    fontWeight:'bold',
    color:"white",
    
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});


