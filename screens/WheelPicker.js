import React, { Component } from 'react'
import {
    Picker,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Platform
} from 'react-native'
class WheelPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: ['red', 'green', 'blue', 'black'],
            selectedColor: 'red'
        }
        this.handleOnValueChnage = this.handleOnValueChnage.bind(this)
    }

    onValueChange(key, value) {
        const newState = {}
        newState[key] = value
        this.setState(newState)
    }
    handleOnValueChnage(color) {
        console.log(color)
        this.setState({
            selectedColor: color
        })

    }

    render() {
        var PickerItem = Picker.Item
        let Window = Dimensions.get('window')
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: this.state.selectedColor, width: Window.width, height: 50, justifyContent: 'center' }} >
                    <Text style={{ textAlign: 'center', color: 'white' }}> Current Color: {this.state.selectedColor} </Text>
                </View>
                <Picker style={styles.picker}
                    mode="dropdown"
                    selectedValue={this.state.selectedColor}
                    onValueChange={(color) => this.handleOnValueChnage(color)}>
                    {this.state.colors.map((s, i) => {
                        return (<PickerItem
                            key={i}
                            value={s}
                            label={s} />)
                    })}</Picker>

            </View >
        )
    }

}
var styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        marginTop: (Platform.OS === 'ios') ? 64 : 56,
        marginBottom: (Platform.OS === 'ios') ? 200 : 350,
    },
    picker: {
        width: 320

    },
})
export default WheelPicker