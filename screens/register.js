import React, {useState} from "react";
import {Text, TouchableOpacity} from "react-native";
import { View, FormControl, Input, VStack, Button,} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Register =() => {
    const [email,setEmail] = useState ("");
    const [password,setPassword] = useState("");

    const navigation = useNavigation();
    const handleSubmit = () => {
        navigation.navigate("Login")
    };
    return (
        <View flex={1} bg={"#f7f6fd"} alignContent={"center"} px={10} pt={20}>
            <Text style={{
                fontSize: 28,
                color:"#373248",
                fontWeight:"bold",
                textAlign:"center",
            }}>
                Registasi
            </Text>
            <Text style={{
                textAlign:"center",
                fontSize:16,
            }}>
                <Text>Silahkan Masukkan Data Diri Anda</Text>
            </Text>
            <VStack pt={8}>
                <FormControl>
                    <FormControl.Label>Username / Email</FormControl.Label>
                    <Input
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter Your Email"/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter Your Password"
                    type="password"
                    w={"full"}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter Your Password Again"
                    type="password"
                    w={"full"}
                    />
                </FormControl>
                <TouchableOpacity onPress={() => navigation.navigate('Lupa') } style={{marginTop:10}}>
                    <Text style={{
                        textAlign:"right",
                        fontWeight:"bold",
                    }}>
                        Lupa Password ?
                    </Text>
                </TouchableOpacity>
                <Button mt={6} bg={"#82a9f4"} onPress={handleSubmit}>Registrasi</Button>
                <Text style={{
                textAlign:"center",
                fontWeight:"bold",
                marginTop:40
            }}>
                Atau login dengan 
            </Text>
            <View style={{
                flexDirection:"row",
                marginHorizontal:"20",
                marginTop:40
            }}>
                <TouchableOpacity style={{
                    backgroundColor:"#ffffff",
                    flex:1,
                    paddingVertical:10,
                    borderRadius:9,
                    justifyContent:"center",
                    alignItems:"center",
                    marginRight:10,
                    elevation:2,
                }}>
                    <AntDesign name="google" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor:"#ffffff",
                    flex:1,
                    paddingVertical:10,
                    borderRadius:9,
                    justifyContent:"center",
                    alignItems:"center",
                    marginRight:10,
                    elevation:2,
                }}>
                    <FontAwesome5 name="facebook" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor:"#ffffff",
                    flex:1,
                    paddingVertical:10,
                    borderRadius:9,
                    justifyContent:"center",
                    alignItems:"center",
                    marginRight:10,
                    elevation:2,
                }}>
                    <AntDesign name="apple1" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login') }style={{
                marginTop:20,
                marginRight:20
            }}>
                <Text style={{
                    textAlign:"center",
                    fontWeight:"bold",
                    marginTop:30
                }}>
                    Sudah member ? <Text style={{color:"#82A9F4"}}>Login Disini</Text>
                </Text>
            </TouchableOpacity>
            </VStack>
        </View>
    )
}

export default Register;