import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetPropertiesByLoc, addInvoice } from '../slice/invoiceslice'



const InvoiceList = (props) => {
    const [invoiceValue, setInvoiceValue] = useState("hello")
    const dispatch = useDispatch()
    const invoiceList = useSelector(state => state)
    const nameList = useSelector(state => state.invoiceslice.nameList)
    console.log("@@@ invoide ==", invoiceValue)
    console.log("@@@ invoiceList ==", invoiceList.invoiceslice)
    console.log("@@@ data ==", invoiceList.invoiceslice.data)

    const addInvoiceFn = (list) => {
        console.log("clicked", list)
        dispatch(addInvoice(list))
    }

    useEffect(() => {
        dispatch(GetPropertiesByLoc())
    }, [])

    const handleSubmit = () => {
        props.navigation.navigate('NewScreen')
    }

    return (
        <SafeAreaView>

            <View style={{ height: 400, alignSelf: "center", justifyContent: "center", alignItems: "center" }}>
                <TextInput style={{ height: 50, width: 200, borderWidth: 1, borderColor: "black" }} onChangeText={(txt) => setInvoiceValue(txt)} />
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => addInvoiceFn(invoiceValue)} >
                    <Text>App</Text>
                </TouchableOpacity>
                <FlatList
                    data={invoiceList.invoiceslice.invoiceList}
                    renderItem={({ item }) => {
                        // console.log("==== item", item)
                        return (
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        )
                    }}
                />

                <TouchableOpacity style={{ height: 30, width: 60, backgroundColor: 'pink' }} onPress={() => handleSubmit()}>
                    <Text>Submit</Text>
                </TouchableOpacity>

                {/* <Text>Name: {nameList}</Text> */}

                <FlatList
                    data={nameList}
                    renderItem={({ item }) => {
                        // console.log("==== item", item)
                        return (
                            <View>
                                <Text>Name: {item.name}</Text>
                            </View>
                        )
                    }}
                />

            </View>
        </SafeAreaView>
    )
}

export default InvoiceList

const styles = StyleSheet.create({})