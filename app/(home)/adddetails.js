import { StyleSheet, Text, View, ScrollView, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
import { base_url } from "../../utils/config";

const adddetails = () => {
  const router = useRouter();
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const [joiningDate,setJoiningDate] = useState("");
  const [dateOfBirth,setDateOfBirth] = useState("");
  const [salary,setSalary]=useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [address,setAddress] = useState("")

  const handelSubmit = ()=>{
      const data = {
        employeeId,
        employeeName,
        designation,
        joiningDate,
        dateOfBirth,
        salary,
        phoneNumber,
        address,
        activeEmployee:true
      }

      axios.post(`${base_url}/employee/create`,data).then((response)=>{
        Alert.alert("Registration Success")
        setEmployeeId("")
        setEmployeeName("");
        setDateOfBirth("")
        setDesignation("")
        setJoiningDate("")
        setSalary("")
        setPhoneNumber("")
        setAddress("")
      }).catch((error)=>{
        Alert.alert("Registration fail")
        console.log(error)
      })
  }

  return (
    <ScrollView style={{ padding: 10, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Pressable onPress={() => router.push("/(home)/employee")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>Add Employee</Text>
      </View>

      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>Employee Id</Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 3,
          }}
          value={employeeId}
          onChangeText={(text) => setEmployeeId(text)}
          placeholder="Enter Employee Id"
        />
      </View>

      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>Employee Name</Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 3,
          }}
          value={employeeName}
          onChangeText={(text) => setEmployeeName(text)}
          placeholder="Enter Employee Name"
        />
      </View>

      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>
          Employee Designation
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 3,
          }}
          value={designation}
          onChangeText={(text) => setDesignation(text)}
          placeholder="Enter Employee Name"
        />
      </View>

      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>
          Employee Joining Date
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 3,
          }}
          value={joiningDate}
          onChangeText={(text) => setJoiningDate(text)}
          placeholder="Enter Employee Joining Date"
        />
      </View>

      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>
           Date Of Birth
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 3,
          }}
          value={dateOfBirth}
          onChangeText={(text) => setDateOfBirth(text)}
          placeholder="Enter Date Of Birth"
        />
      </View>

      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>
         Salary
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 3,
          }}
          value={salary}
          onChangeText={(text) => setSalary(text)}
          placeholder="Enter salary"
        />
      </View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>
        Phone Number
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 3,
          }}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder="Enter Phone Number"
        />
      </View>

      <View style={{ paddingVertical: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>
          Address
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 3,
          }}
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Enter Address"
        />
      </View>

      <View style={{marginTop:10}}>
          <Pressable onPress={()=>handelSubmit()} style={{padding:10,backgroundColor:"green",borderRadius:5,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
              <Text style={{color:"#fff",fontSize:16,fontWeight:600}}>Add Employee</Text>
          </Pressable>
      </View>
    </ScrollView>
  );
};

export default adddetails;

const styles = StyleSheet.create({});
