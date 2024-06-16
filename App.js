import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Tabs from './src/components/Tabs'
import CategoryScreen from './src/screens/CategoryScreen'

const App = () => {
  
  return (
    <View  style={styles.appcontainer}>
     
     <Tabs/>
   
    {/* <CategoryScreen/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  appcontainer : {
   flex : 1,
  backgroundColor : 'white',
  },

})