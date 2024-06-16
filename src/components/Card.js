import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const Card = ({image, title}) => {
  return (
    <View style={styles.container}>
        <View style= {styles.cardcontainer}>
        <Image source={image} style={styles.img} />
        </View>
        <Text style={styles.textstyle}>{title}</Text>
    </View>
  )
}

const devicewidth = Math.round(Dimensions.get('window').width);
export default Card

const styles = StyleSheet.create({

   container: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',  
  },
  cardcontainer: {
    width: devicewidth - 50,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,  
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 10,
    elevation: 15,
  },
  img: {
    height: 200,
    width: devicewidth - 50,
    borderRadius: 15,
  },
  textstyle: {
    textAlign: 'left',
    alignSelf: 'flex-start',  
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 30,  
    marginTop : 10,
  },
})