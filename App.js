import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrolllView, Button, Switch, Vibration, SafeAreaView, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
//import {Constants} from 'expo';
import {Timer} from './Timer.js'
import AddNewTimes from './AddNewTimes.js'

const image = { uri: "https://f4.bcbits.com/img/a2269076172_16.jpg" };

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,

  },
  back: {
    flex: .14,
    alignSelf: 'center'
    
  },
  
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'column',
  },
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 48,
    color: 'white',
    textShadowOffset: {
      height: 3,
      width: 3
    },
    textShadowColor: 'black',
    textShadowRadius: 4,

  },
  font: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textShadowOffset: {
      height: 3,
      width: 3
    },
    textShadowColor: 'black',
    textShadowRadius: 4,
  },
  message: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowOffset: {
      height: 3,
      width: 3
    },
    textShadowColor: 'black',
    textShadowRadius: 2,

  },
  lowerFonts: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textShadowOffset: {
      height: 3,
      width: 3
    },
    textShadowColor: 'black',
    textShadowRadius: 2,

  },
  header: {
    alignItems: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderWidth: 1,
    height: 50,
    width: 100,
    borderRadius: 15,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    borderWidth: 1,
    height: 35,
    width: 65,
    borderRadius: 0,
  },
  button3: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderWidth: 1,
    height: 50,
    width: 300,
    borderRadius: 15,
  },
  box: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',

  },
  box1: {
    flex: 0,
    padding: 10,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',

  },
  box2: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',

  },
  buttonSection: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',

  },
  
  
})
const timer = null
const lazyDetect = false
let storedSeconds = 0
let storedMinutes = 0
let storedBreakSeconds = 0
let storedBreakMinutes = 0

export default class App extends
  React.Component {
  constructor() {
    super()
    this.state = {
      start: false,
      workOrBreak: 'work',
      seconds: storedSeconds,
      minutes: storedMinutes,
      breakSeconds: storedBreakSeconds,
      breakMinutes: storedBreakMinutes,
      showForm: false,
    }
  }
  updateTimer = () => {
    if (this.state.workOrBreak === 'work') {
      if (this.state.seconds > 0) {
        this.setState(prevState => ({ seconds: prevState.seconds - 1 }))
      } else {
        if (this.state.minutes > 0) {
          this.setState(prevState => ({ seconds: 59, minutes: prevState.minutes - 1 }))
        } else {
          if (this.state.workOrBreak === 'work') {
            this.setState({
              workOrBreak: "break",
              breakSeconds: storedBreakSeconds,
              breakMinutes: storedBreakMinutes,
              
            })
            Vibration.vibrate([400, 800])
          } /*else {
            this.setState({
              workOrBreak: "work",
              minutes: 0,
              seconds: 5,
            })
            Vibration.vibrate([400, 800])
          } */
        }

      }
    }
    else {
      if (this.state.breakSeconds > 0) {
        this.setState(prevState => ({ breakSeconds: prevState.breakSeconds - 1 }))
      } else {
        if (this.state.breakMinutes > 0) {
          this.setState(prevState => ({ breakSeconds: 59, breakMinutes: prevState.breakMinutes - 1 }))
        } else {
          if (this.state.workOrBreak === 'break') {
            this.setState({
              workOrBreak: "work",
              seconds: storedSeconds,
              minutes: storedMinutes,
          
            })
            Vibration.vibrate([400, 800])
          }
        }
      }

    }
  }
  // componentDidMount() {
  //  setInterval(() => this.inc(), 1000)
  // }
  start() {
    //this function will return an html button to the page based on if the timer is started or paused. (if condition on start=true or false)
    if (this.state.start) {
      return (
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {
            if (this.state.start) {

              this.setState({
                start: false,
              })
              this.timer = clearInterval(this.timer)

            }

          }}>
            <Text>Pause</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return (
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {

            if (!this.state.start) {

              this.lazyDetect = true
              this.setState({
                start: true,
              })
              this.timer = setInterval(() => this.updateTimer(), 1000)
            }

          }}>
            <Text>Start</Text>
          </TouchableOpacity>
        </View>
      )
    }


  }
  //WTF IS HAPPENING IS THAT ITS TAKING 5 AND ADDING 1 TO THE END THUS 51 IS MADE WHEN WE JUST WANT TO INCREMENT BY 1
  increaseWorkMinutes() {
   this.setState(({
      minutes: this.state.minutes + 1,
    }))
    storedMinutes = this.state.minutes + 1
  }
  decreaseWorkMinutes() {
    this.setState(({
      minutes: this.state.minutes - 1,
    }))
    storedMinutes = this.state.minutes - 1
  }
  //this.setState(prevState => ({showForm: !prevState.showForm}))
  increaseWorkSeconds() { 
    this.setState(({
      seconds: this.state.seconds + 1,
    }))
    storedSeconds = this.state.seconds + 1
  }
  decreaseWorkSeconds() {
    this.setState(({
      seconds: this.state.seconds - 1,
    }))
    storedSeconds = this.state.seconds - 1
  }
  increaseBreakMinutes() {
    this.setState(({
      breakMinutes: this.state.breakMinutes + 1,
    }))
      storedBreakMinutes = this.state.breakMinutes + 1
  }
  decreaseBreakMinutes() {
    this.setState(({
    breakMinutes: this.state.breakMinutes - 1,
    }))
    storedBreakMinutes = this.state.breakMinutes - 1
  }
  increaseBreakSeconds() {
    this.setState(({
      breakSeconds: this.state.breakSeconds + 1,
    }))
    storedBreakSeconds = this.state.breakSeconds + 1
  }
  decreaseBreakSeconds() {
    this.setState(({
      breakSeconds: this.state.breakSeconds - 1,
    }))
    storedBreakSeconds = this.state.breakSeconds - 1
  }
  stop() {

    this.setState({
      start: false,
      workOrBreak: 'work',
      seconds: storedSeconds,
      minutes: storedMinutes,
      breakSeconds: storedBreakSeconds,
      breakMinutes: storedBreakMinutes,
      showForm: false,

    })
    this.lazyDetect = false
    this.timer = clearInterval(this.timer)
  }

  

  message() {

    if (this.state.start === false) {

      if (this.lazyDetect) {
        return (
          <Text style={styles.message}> Get back to it. </Text>
        )
      }
      else {
        return (
          <Text style={styles.message}> Get ready... </Text>
        )
      }
    }
    else {
      if (this.state.workOrBreak === 'work') {

        return (
          <Text style={styles.message}> DO WORK SON!</Text>
        )

      }
      else {
        return (
          <Text style={styles.message}> Take a break son. </Text>
        )
      }
    }
  }

  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}))
  }
  //<TextInput value={this.state.seconds} placeholder="Eat me"/>
       // <TextInput value={this.state.minutes} placeholder="Eat me again"/>
  

  addTime = newTime => {
    storedSeconds = +newTime.seconds
    storedMinutes = +newTime.minutes
    storedBreakSeconds = +newTime.breakSeconds
    storedBreakMinutes = +newTime.breakMinutes

    this.setState({
      start: false,
      workOrBreak: 'work',
      showForm: false,
      seconds: +newTime.seconds,
      minutes: +newTime.minutes,
      breakSeconds: +newTime.breakSeconds,
      breakMinutes: +newTime.breakMinutes,


    })
    
    this.lazyDetect = false
    this.timer = clearInterval(this.timer)
  }
  
//<Image source={doWork} style={{width: 10, height: 10}}/>
  render() {

    if(this.state.showForm) return <AddNewTimes onSubmit={this.addTime}/>


    return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={image} style={styles.image}>

      

      <View style={styles.appContainer}>
        
      <View style={styles.back}>
        
        <TouchableOpacity style={styles.button3}
        onPress={() => this.toggleForm()}>
          <Text> Enter New Times With TextInput </Text>
        </TouchableOpacity>
        
      </View>
      
            <Text style={styles.font}> Pomodoro Timer</Text>


            {this.message()}

            <Timer status={this.state.workOrBreak} workSeconds={this.state.seconds} workMinutes={this.state.minutes} breakSeconds={this.state.breakSeconds} breakMinutes={this.state.breakMinutes} />

          <View style={styles.box}>

          {this.start()}

        
            <TouchableOpacity style={styles.button}
              onPress={() => this.stop()}>
              <Text>Reset</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.buttonSection}>

            
            <Text style={styles.message}>Work Time:</Text>

            <View style={styles.box}>

              <View style={styles.box2}>

                <Text style={styles.lowerFonts}>Minutes</Text>
                <Text style={styles.message}>{storedMinutes}</Text>
                <View style={styles.box1}>

                  <TouchableOpacity style={styles.button2} onPress={() => this.increaseWorkMinutes()}>
                    <Text> + </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button2} onPress={() => this.decreaseWorkMinutes()}>
                    <Text> - </Text>
                  </TouchableOpacity>
                </View>

              </View>

              <View style={styles.box2}>
                <Text style={styles.lowerFonts}>Seconds</Text>
                <Text style={styles.message}>{storedSeconds}</Text>
                <View style={styles.box1}>

                  <TouchableOpacity style={styles.button2} onPress={() => this.increaseWorkSeconds()}>
                    <Text> + </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button2} onPress={() => this.decreaseWorkSeconds()}>
                    <Text> - </Text>
                  </TouchableOpacity>

                </View>
              </View>

            </View>
            <Text style={styles.message}>Break Time:</Text>
            <View style={styles.box}>

              <View style={styles.box2}>
                <Text style={styles.lowerFonts}>Minutes</Text>
                <Text style={styles.message}>{storedBreakMinutes}</Text>
                <View style={styles.box1}>

                  <TouchableOpacity style={styles.button2} onPress={() => this.increaseBreakMinutes()}>
                    <Text> + </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button2} onPress={() => this.decreaseBreakMinutes()}>
                    <Text> - </Text>
                  </TouchableOpacity>
                </View>

              </View>

              <View style={styles.box2}>
                <Text style={styles.lowerFonts}>Seconds</Text>
                <Text style={styles.message}>{storedBreakSeconds}</Text>
                <View style={styles.box1}>

                  <TouchableOpacity style={styles.button2} onPress={() => this.increaseBreakSeconds()}>
                    <Text> + </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button2} onPress={() => this.decreaseBreakSeconds()}>
                    <Text> - </Text>
                  </TouchableOpacity>

                </View>
              </View>

            </View>
          </View>
        
      </View>
      </ImageBackground>
      </SafeAreaView>

    );//<Button title="Stop" color="blue" onPress={() => this.stop()}/>
  }
}