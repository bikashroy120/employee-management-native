import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { base_url } from "../../utils/config";

const employee = () => {
  const [employees, setEmployees] = useState();
  const router = useRouter()

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(
          `${base_url}/employee`
        );
        setEmployees(response.data);
      } catch (error) {
        console.log("error====", error);
      }
    };
    fetchEmployeeData();
  }, []);

  console.log(employees);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            height: 40,
            borderRadius: 4,
          }}
        >
            <Ionicons name="search" size={20} color="black" />
            <TextInput style={{flex:1}} placeholder="Search"/>
            <View>
                <Pressable onPress={()=>router.push("/(home)/adddetails")}>
                    <AntDesign name="pluscircle" size={24} color="black" />
                </Pressable>
            </View>
        </Pressable>
      </View>
    </View>
  );
};

export default employee;

const styles = StyleSheet.create({});
