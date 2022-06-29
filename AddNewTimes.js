import React from 'react'
import {Text, StyleSheet, Button, KeyboardAvoidingView, ImageBackground, Keyboard, TouchableWithoutFeedback,  SafeAreaView, View, TextInput} from 'react-native'

const image = { uri: "https://f4.bcbits.com/img/a2269076172_16.jpg" };

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    
      },
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    container2: {
        flex: 0,
        //backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    container3: {
        flex: 0,
        //backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        //opacity: 0.8,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
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
    input: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ffff',
        minWidth: 50,
        marginTop: 20,
        marginHorizontal: 20, 
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        height: 45,
        width: 85,
    },
    textInputs: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    submitButton: {
        //alignItems: "center",
        //backgroundColor: "white",
        padding: 15,
        borderWidth: 1,
        height: 50,
        width: 100,
        borderRadius: 15,
        borderColor: 'black',
        backgroundColor: '#ffff',
    },
    hideKeyboard: {
        flex: 1
    },
})

export default class AddNewTimes extends React.Component {
    state = {
        seconds: 0,
        minutes: 0,
        breakSeconds: 0,
        breakMinutes: 0,
        isFormValid: false,
    }

    handleSecondsChange = seconds => {
        if (+seconds >= 0 && +seconds <= 60 && seconds.length <= 2) {
            this.setState({ seconds }, this.validateForm)
        }
    }
    handleMinutesChange = minutes => {
        if (+minutes >= 0 && +minutes <= 99 && minutes.length <= 2) {
            this.setState({ minutes }, this.validateForm)
        }
    }
    handleBreakSecondsChange = breakSeconds => {
        if (+breakSeconds >= 0 && +breakSeconds <= 60 && breakSeconds.length <= 2) {
            this.setState({ breakSeconds }, this.validateForm)
        }
    }
    handleBreakMinutesChange = breakMinutes => {
        if (+breakMinutes >= 0 && +breakMinutes <= 99 && breakMinutes.length <= 2) {
            this.setState({ breakMinutes }, this.validateForm)
        }
    }
    validateForm = () => {
        if (//+this.state.seconds >= 0 && 
            this.state.seconds.length >= 1  && 
            this.state.seconds.length >= 1 &&
            this.state.minutes.length >= 1 &&
            this.state.breakSeconds.length >= 1 &&
            this.state.breakMinutes.length >= 1
            //+this.state.seconds >= 0 && +this.state.seconds <= 60  && this.state.seconds.length <= 1 &&
            //+this.state.minutes >= 0 && +this.state.minutes <= 99 && this.state.minutes.length <= 1 &&
            //+this.state.breakSeconds >= 0 && +this.state.breakSeconds <= 60 && this.state.breakSeconds.length <= 1 && 
            //+this.state.breakMinutes >= 0 && +this.state.breakMinutes <= 99 && this.state.breakMinutes.length <= 1
            ) {
                this.setState({ isFormValid: true })

            } else {
                this.setState({ isFormValid: false })
            }
    }
    handleSubmit = () => {

        if (//+this.state.seconds >= 0 && 
            this.state.seconds.length >= 1 &&
            this.state.minutes.length >= 1 &&
            this.state.breakSeconds.length >= 1 &&
            this.state.breakMinutes.length >= 1) {
            this.props.onSubmit({
                seconds: +this.state.seconds,
                minutes: +this.state.minutes,
                breakSeconds: +this.state.breakSeconds,
                breakMinutes: +this.state.breakMinutes,
            })
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <TouchableWithoutFeedback style={styles.hideKeyboard} onPress={() => Keyboard.dismiss()}>
                    <ImageBackground source={image} style={styles.image}>

                        <KeyboardAvoidingView behavior="padding" style={styles.container}>

                            <View style={styles.container2}>
                                <Text style={styles.message}> Work Times: </Text>

                                <View style={styles.textInputs}>

                                    <View style={styles.container3}>
                                        <Text style={styles.message}> Minutes </Text>
                                        <TextInput style={styles.input}
                                            onChangeText={this.handleMinutesChange}
                                            keyboardType="numeric"
                                            value={this.state.minutes.toString()}
                                            placeholder="0-99"
                                        />
                                    </View>
                                    <View style={styles.container3}>
                                        <Text style={styles.message}> Seconds </Text>
                                        <TextInput style={styles.input}
                                            onChangeText={this.handleSecondsChange}
                                            keyboardType="numeric"
                                            value={this.state.seconds.toString()}
                                            placeholder="0-60"
                                        />
                                    </View>
                                </View>

                                <Text style={styles.message}> Break Times: </Text>

                                <View style={styles.textInputs}>

                                    <View style={styles.container3}>
                                        <Text style={styles.message}> Minutes </Text>
                                        <TextInput style={styles.input}
                                            onChangeText={this.handleBreakMinutesChange}
                                            keyboardType="numeric"
                                            value={this.state.breakMinutes.toString()}
                                            placeholder="0-99"
                                        />
                                    </View>
                                    <View style={styles.container3}>
                                        <Text style={styles.message}> Seconds </Text>
                                        <TextInput style={styles.input}
                                            onChangeText={this.handleBreakSecondsChange}
                                            keyboardType="numeric"
                                            value={this.state.breakSeconds.toString()}
                                            placeholder="0-60"
                                        />
                                    </View>
                                </View>
                            </View>

                            <Button title='Add Times'
                                onPress={this.handleSubmit} disabled={!this.state.isFormValid} />

                        </KeyboardAvoidingView>

                    </ImageBackground>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        );
    }

}