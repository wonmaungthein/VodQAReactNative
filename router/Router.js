import React, { Component } from 'react'
import LoginScreen from '../screens/LoginScreen'
import SamplesListScreen from '../screens/SamplesListScreen'
import {
    Navigator
} from 'react-native'
import Routes from './Routes'

class Router extends Component {

    constructor(props) {
        super(props)
        this.renderScene = this.renderScene.bind(this)
    }

    renderScene(route, navigator) {
        switch (route.title) {
            case Routes.LoginScreen.title:
                return (<LoginScreen navigator={navigator} />)
            case Routes.SamplesListScreen.title:
                return (<SamplesListScreen navigator={navigator} />)
            default:
                return
        }
    }

    render() {
        const routes = [
            { title: Routes.LoginScreen.title },
            { title: Routes.SamplesListScreen.title },
        ]
        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={this.renderScene}
                />
        )
    }
}

export default Router