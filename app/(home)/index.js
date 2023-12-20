import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient"
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const index = () => {
  return (
    <ScrollView>
      <LinearGradient colors={["#7F7FD5","#E9E4F0"]} style={{flex:1}}>
        <View style={{padding:12}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 <Feather name="bar-chart" size={24} color="black" />
                 <Text style={{fontSize:16,fontWeight:"600"}}>Employee Management System</Text>
                 <AntDesign name="lock" size={24} color="black" />
            </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})