import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import NewScreen from '../screens/NewScreen'
import InvoiceList from '../screens/invoiceList'

const stackRoot = createNativeStackNavigator()

const Route = () => {
    return (
        <NavigationContainer>
            <stackRoot.Navigator initialRouteName='InvoiceList'>
                <stackRoot.Screen name='InvoiceList' component={InvoiceList} />
                <stackRoot.Screen name='NewScreen' component={NewScreen} />
            </stackRoot.Navigator>
        </NavigationContainer>
    )
}

export default Route