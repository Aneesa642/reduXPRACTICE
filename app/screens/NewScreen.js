import { View, Text, SafeAreaView, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addName } from '../slice/invoiceslice'


const NewScreen = (props) => {
    const [nameValue, setNameValue] = useState('Aneesa')
    const dispatch = useDispatch()
    const { invoiceList } = useSelector(state => state.invoiceslice)
    const nameList = useSelector(state => state)
    console.log('@@ Name ==', nameValue)
    console.log('@@ nameList ==', nameList)
    console.log('@@ nameList ==', nameList.invoiceslice)

    const AddName = (list) => {
        console.log('Checked', list)
        dispatch(addName(list))
    }

    // console.log("==== new lsit", newlist)
    // useEffect(() => {
    //     console.log('@@@ invoiceList ==', props.route.params)
    // setData(props.route.params)
    // })


    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={invoiceList}
                    renderItem={({ item }) => {
                        // console.log("==== item", item)
                        return (
                            <View>
                                <Text>Data: {item.name}</Text>
                            </View>
                        )
                    }}
                />
                <View style={{ height: 400, alignSelf: "center", justifyContent: "center", alignItems: "center" }}>
                    <TextInput style={{ height: 60, width: 300, borderWidth: 1, borderColor: "black" }} onChangeText={(txt) => setNameValue(txt)} />
                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => AddName(nameValue)} >
                        <Text>Submit</Text>
                    </TouchableOpacity>

                    {/* <Text>{nameList.invoiceslice.nameList}</Text> */}

                    <FlatList
                        data={nameList.invoiceslice.nameList}
                        renderItem={({ item }) => {
                            // console.log("==== item", item)
                            return (
                                <View>
                                    <Text>{item.name}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewScreen