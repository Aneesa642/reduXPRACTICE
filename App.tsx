import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InvoiceList from './app/screens/invoiceList'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './app/store/store'
import NewScreen from './app/screens/NewScreen'
import Route from './app/navigation/Route'
import { GetPropertiesByLoc } from './app/slice/invoiceslice'

// const App = () => {
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
//     <View style={{ flex: 1, backgroundColor: "blue", justifyContent: "space-around", alignItems: "flex-end" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "pink" }}>

//       </View>
//       <View style={{ height: 40, width: 40, backgroundColor: "yellow" }}>

//       </View>
//     </View>
//   </SafeAreaView>
// )
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "red", justifyContent: "space-between" }}>
//     <View style={{ flex: 1, backgroundColor: "blue", alignItems: "center" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "green" }}>

//       </View>
//     </View>
//     <View style={{ flexDirection: "row", flex: 1, backgroundColor: "blue", justifyContent: "space-between", alignItems: "center" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "yellow" }}>

//       </View>
//       <View style={{ height: 40, width: 40, backgroundColor: "red" }}>

//       </View>
//     </View>
//     <View style={{ flex: 1, backgroundColor: "blue", alignItems: "center", justifyContent: "flex-end" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "orange" }}>

//       </View>
//     </View>
//   </SafeAreaView>
// )
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "red", justifyContent: "space-between" }}>
//     <View style={{ flexDirection: "row", flex: 1, backgroundColor: "blue", justifyContent: "space-between" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "green" }}>

//       </View>
//       <View style={{ height: 40, width: 40, backgroundColor: "yellow" }}>

//       </View>
//     </View>
//     <View style={{ flexDirection: "row", flex: 1, alignItems: "flex-end", backgroundColor: "green", justifyContent: "space-between" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "orange" }}>

//       </View>
//       <View style={{ height: 40, width: 40, backgroundColor: "pink" }}>

//       </View>
//     </View>
//   </SafeAreaView>
// )
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "red", justifyContent: "space-between" }}>
//     <View style={{ flex: 1, backgroundColor: "blue", alignItems: "center" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "green" }}>

//       </View>
//     </View>
//     <View style={{ flexDirection: "row", flex: 1, backgroundColor: "blue", justifyContent: "space-between", alignItems: "center" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "yellow" }}>

//       </View>
//       <View style={{ height: 80, width: 80, backgroundColor: "red" }}>

//       </View>
//       <View style={{ height: 40, width: 40, backgroundColor: "red" }}>

//       </View>
//     </View>
//     <View style={{ flex: 1, backgroundColor: "blue", alignItems: "center", justifyContent: "flex-end" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "orange" }}>

//       </View>
//     </View>
//   </SafeAreaView>
// )
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "red", justifyContent: "space-between" }}>

//     <View style={{ flexDirection: "row", flex: 1, backgroundColor: "blue", justifyContent: "space-between", alignItems: "center" }}>
//       <View style={{ height: 40, width: 40, backgroundColor: "yellow" }}>

//       </View>
//       <View style={{ height: 80, width: 80, backgroundColor: "red" }}>

//       </View>
//       <View style={{ height: 40, width: 40, backgroundColor: "red" }}>

//       </View>
//     </View>

//   </SafeAreaView>
// )
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "red", justifyContent: "space-between", alignItems: "center" }}>

//     <View style={{ height: 40, width: 40, backgroundColor: "green" }}>

//     </View>



//     <View style={{ height: 40, width: 40, backgroundColor: "blue" }}>

//     </View>


//     <View style={{ height: 40, width: 40, backgroundColor: "orange" }}>

//     </View>

//   </SafeAreaView>
// )
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "red", justifyContent: "space-between" }}>

//     <View style={{ height: 40, width: 40, backgroundColor: "green" }}>

//     </View>

//     <View style={{ height: 40, width: 40, backgroundColor: "blue" }}>

//     </View>

//     <View style={{ height: 40, width: 40, backgroundColor: "orange" }}>

//     </View>

//   </SafeAreaView>
// )
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "red", justifyContent: "space-between", alignItems: "flex-end" }}>

//     <View style={{ height: 40, width: 40, backgroundColor: "green" }}>

//     </View>

//     <View style={{ height: 40, width: 40, backgroundColor: "blue" }}>

//     </View>

//     <View style={{ height: 40, width: 40, backgroundColor: "orange" }}>

//     </View>

//   </SafeAreaView>
// )
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>

//     <View style={{ height: 150, width: 250, backgroundColor: "white", justifyContent: "space-between", alignItems: "flex-end" }}>
//       <View style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', height: 40, width: 250, backgroundColor: "white", justifyContent: "space-around" }}>
//         <TextInput placeholder='Enter your email' style={{ height: 35, width: 220, alignSelf: "center", backgroundColor: "white" }} />
//       </View>


//       <View style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', height: 40, width: 250, backgroundColor: "white", justifyContent: "space-around" }}>
//         <TextInput placeholder='Enter your password' style={{ height: 35, width: 220, alignSelf: "center", backgroundColor: "white" }} />
//       </View>

//       <TouchableOpacity style={{ borderRadius: 10, height: 40, width: 100, backgroundColor: "orange", justifyContent: "center", alignItems: "center" }}>
//         <Text>Login</Text>
//       </TouchableOpacity>
//     </View>

//   </SafeAreaView>
// )
// const App = () => {
//   const [fName, setName] = useState("")
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
//       <View style={{ height: 500, width: 300, justifyContent: "space-around", alignItems: "center" }}>
//         <View style={styles.container}>
//           <TextInput placeholder='First Name' value={fName} onTextInput={() => setName("")} style={{ height: 40, width: 180, alignSelf: 'center' }} />
//         </View>
//         <View style={styles.container}>
//           <TextInput placeholder='Last Name' style={{ height: 40, width: 180, alignSelf: 'center' }} />
//         </View>
//         <View style={styles.container}>
//           <TextInput placeholder='Phone number' style={{ height: 40, width: 180, alignSelf: 'center' }} />
//         </View>
//         <View style={styles.container}>
//           <TextInput placeholder='Password' style={{ height: 40, width: 180, alignSelf: 'center' }} />
//         </View>
//         <View style={styles.container}>
//           <TextInput placeholder='Confirm-Password' style={{ height: 40, width: 180, alignSelf: 'center' }} />
//         </View>
//         <View style={{ height: 40, width: 200, justifyContent: "center" }}>
//           <TouchableOpacity style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', height: 40, width: 100, backgroundColor: "blue", justifyContent: "center", alignItems: "center", alignSelf: "flex-end" }}>
//             <Text style={{ color: 'white' }}>Sing UP</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default App

// <Provider store={store}>
//   <InvoiceList />
// </Provider>

// const styles = StyleSheet.create({

//   container: {
//     borderRadius: 10, borderWidth: 1, borderColor: 'black', height: 40, width: 200, backgroundColor: "white", justifyContent: "center"
//   }
// })

// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, [])
//   return (
//     <Text>I have reached {count} times!</Text>
//   )
// }

// export default App
// import { View, Text, Button, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [products, setProducts] = useState('');
//   const [brands, setBrands] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [list, setList] = useState(false);

// component Did Mount
//   useEffect(() => {
//     console.log('Hello')
//     axios.get('https://automationexercise.com/api/productsList')
//       .then((res) => {
//         console.log("==== res", res.data.products)
//         setProducts(res.data.products)
//       })
//       .catch((e) => {
//         console.log("==== error", e)
//       })
//   }, [])

//component Did update
//   useEffect(() => {
//     console.warn("didupdate", count)
//   }, [count])

//component WillUnmount
//   useEffect(() => {
//     const tim = setTimeout(() => {
//       console.warn("inside time")
//     }, 1000)

//     clearTimeout(tim)
//   }, [])

//   const onCallAPI1 = () => {
//     setLoading(true)
//     axios.get('https://automationexercise.com/api/productsList')
//       .then((res) => {
//         console.log("==== res", res.data.products)
//         setProducts(res.data.products)
//         setLoading(false)
//       })
//       .catch((e) => {
//         console.log("==== error", e)
//       })
//   }

//   const onCallAPI2 = () => {
//     setLoading(true)
//     axios.get('https://automationexercise.com/api/productsList')
//       .then((res) => {
//         console.log("==== res", res.data.products)
//         setProducts(res.data.products)
//         setLoading(false)
//       })
//       .catch((e) => {
//         console.log("==== error", e)
//       })
//   }

//   const onCallAPI3 = () => {
//     setLoading(true)
//     axios.get('https://automationexercise.com/api/brandsList')
//       .then((res) => {
//         console.log("==== res", res.data.brands)
//         setBrands(res.data.brands)
//         setLoading(false)
//       })
//       .catch((e) => {
//         console.log("==== error", e)
//       })
//   }

//   return (
//     <SafeAreaView>
//       <View style={{ height: 800, width: 440, alignItems: 'center', backgroundColor: 'pink' }}>
//         <Text style={{ fontSize: 50, alignSelf: 'center', color: 'blue' }}>List of Products</Text>
//         <View style={{ flexDirection: 'row' }}>
//           <Button title='Update the List' onPress={() => onCallAPI1()} />
//           <Button title='Get the Products' onPress={() => onCallAPI2()} />
//           <Button title='Get the Brands' onPress={() => onCallAPI3()} />
//         </View>
//         {list}

//         {
//           loading ?
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//               {/* <ActivityIndicator size={"large"} color={'red'} /> */}
//               <Text>yes we are fetching the list</Text>
//             </View>
//             :
//             <FlatList
//               data={products}
//               renderItem={({ item }) => {
//                 return (
//                   <View>
//                     <Text>Name: {item.name}</Text>
//                     <Text>Price: {item.price}</Text>
//                     <Text>Brand: {item.brand}</Text>
//                   </View>
//                 )
//               }}
//             />
//         }

//         {
//           loading ?
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//               {/* <ActivityIndicator size={"large"} color={'red'} /> */}
//               <Text>yes we are fetching the list</Text>
//             </View>
//             :
//             <FlatList
//               data={brands}
//               renderItem={({ item }) => {
//                 return (
//                   <View>
//                     <Text>Brand: {item.brand}</Text>
//                   </View>
//                 )
//               }}
//             />
//         }


//       </View>
//     </SafeAreaView >
//   )
// }

// export default App

// import { View, Text, Button, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const App = () => {

//   const [products, setProducts] = useState('');
//   const [brands, setBrands] = useState("");
//   const [name, setName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selected, setSelect] = useState("");

//   const onCallAPI1 = () => {
//     axios.get('https://automationexercise.com/api/productsList')
//       .then((res) => {
//         console.log("==== res", res.data.products)
//         setProducts(res.data.products)
//       })
//       .catch((e) => {
//         console.log("==== error", e)
//       })
//   }

//   const onCallAPI2 = () => {
//     axios.get('https://automationexercise.com/api/productsList')
//       .then((res) => {
//         console.log("==== res", res.data.products)
//         setName(res.data.products)
//       })
//       .catch((e) => {
//         console.log("==== error", e)
//       })
//   }

//   const onCallAPI3 = () => {
//     axios.get('https://automationexercise.com/api/brandsList')
//       .then((res) => {
//         console.log("=== res", res.data.brands)
//         setBrands(res.data.brands)
//       })
//       .catch((err) => {
//         console.log("=== error", err)
//       })
//   }

//   const List = () => {
//     return (
//       <FlatList
//         data={products}
//         renderItem={({ item }) => {
//           return (
//             <View>
//               <Text>Name: {item.name}</Text>
//               <Text>Price: {item.price}</Text>
//               <Text>Brand: {item.brand}</Text>
//             </View>
//           )
//         }}
//       />
//     )
//   }
//   const Products = () => {
//     console.log("==== inside", name)
//     return (
//       <FlatList
//         data={name}
//         renderItem={({ item }) => {
//           console.log("==== item ", item)
//           return (
//             <View>
//               <Text>Products: {item.name}</Text>
//             </View>
//           )
//         }}
//       />
//     )
//   }
//   const Brands = () => {
//     return (
//       <FlatList
//         data={brands}
//         renderItem={({ item }) => {
//           return (
//             <View>
//               <Text>Brand: {item.brand}</Text>
//             </View>
//           )
//         }}
//       />
//     )
//   }


//   const renderSwitch = () => {
//     console.log("==== selected", selected);
//     switch (selected) {
//       case 'products':
//         return (
//           <View>
//             {Products()}
//           </View>
//         )
//       case 'list':
//         return (
//           <View>
//             {List()}
//           </View>
//         )

//       default:
//       case 'brand':
//         return (
//           <View>
//             {Brands()}
//           </View>
//         )
//         break;
//     }
//   }

//   return (
//     <SafeAreaView>
//       <View style={{ height: 1000, width: 440, backgroundColor: 'pink' }}>
//         <Text style={{ fontSize: 50, alignSelf: 'center', color: 'blue' }}>List of Items</Text>
//         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//           <Button title='Get the Product' onPress={() => { onCallAPI2(), setSelect('products') }} />
//           <Button title='Update the List' onPress={() => { onCallAPI1(), setSelect('list') }} />
//           <Button title='Get the Brand' onPress={() => { onCallAPI3(), setSelect('brand') }} />
//         </View>

//         {renderSwitch()}

//       </View>
//     </SafeAreaView >
//   )
// }

// export default App


const App = () => {


  return (
    <Provider store={store}>
      <Route />
    </Provider>

  )
}

export default App