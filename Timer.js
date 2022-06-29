import React from 'react'
import {Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    count:{
        fontSize: 48,
        color: 'white',
        textShadowOffset: {
          height: 3,
          width: 3
        },
        textShadowColor: 'black',
        textShadowRadius: 4,
    }

})

export const Timer = props => {
  
            //below are the props being passed in
           //{props.status} {props.workSeconds} {props.workMinutes} {props.breakSeconds} {props.breakMinutes}</Text>
       
    if (props.status === 'work') {
      return (
        <Text style={styles.count}> {('0' + props.workMinutes).substr(-2)} : {('0' + props.workSeconds).substr(-2)} </Text>
      )
    }
    else {
      return (
        <Text style={styles.count}> {('0' + props.breakMinutes).substr(-2)} : {('0' + props.breakSeconds).substr(-2)} </Text>
      )
    }
   

}

