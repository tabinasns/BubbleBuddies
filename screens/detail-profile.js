import { useState, useEffect } from "react";
import { Heading, Center, Text, Box, HStack, Button, ScrollView } from "native-base";
import { Header } from "../components";''
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native"
import {StatusBar} from "native-base";
import { getData } from "../src/utils/localStorage";

const DetailProfile = ({navigation}) => {
    const [profile, setProfile] = useState(null);
    const getUserData = () => {
        getData("user").then((res) => {
          const data = res;
          if (data) {
            console.log("isi data", data);
            setProfile(data);
          } else {
            // navigation.replace('Login');
          }
        });
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
          getUserData();
        });
    
        return () => {
          unsubscribe();
        };
      }, [navigation]);
    
    return(

        <>
        <Header title={"Profile"} withBack="true" p={5}/>
        <Box mb={50} alignItems="center" >
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} ></StatusBar>
        
            <Ionicons name="person-circle" size={90} alignSelf={"center"} style={{marginTop: 25}} color="grey" ></Ionicons>
                <Box>
                    <Heading alignItems="center" fontSize="20" mr="2"> {profile?.username} </Heading>
                    <Heading alignItems="center" ml={"7"} fontWeight="300" fontSize="18">{profile?.status}</Heading>
                </Box>

            <ScrollView>  
            <Box backgroundColor="#FFFFFF" width={300} borderRadius={12} alignSelf="center" mb={30} mt={8} padding={2}>
                <Box>
                <TouchableOpacity onPress={()=> navigation.navigate("DetailProfile")}>
                    <Box backgroundColor="#82a9f4" height={6} width={60} borderRadius={5} mt={3} mr={4} alignSelf={"flex-end"}>
                        <Text color={"white"} fontSize={17} textAlign="center">Edit</Text>
                    </Box>
                </TouchableOpacity>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Username</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0" mb={4}>{profile?.username}</Text>
                </Box>

                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Email</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0" mb={4}>{profile?.email}</Text>
                </Box>

                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Phone Number</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-0" mb={4}>{profile?.telp}</Text>
                </Box>

                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Address</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0" mb={4}>{profile?.alamat}</Text>
                </Box>
           </Box>
           </ScrollView>  
        </Box>
        </>
    );
};

export default DetailProfile;

// import { Heading, Center, Text, Box, HStack, Button, ScrollView } from "native-base";
// import { Header } from "../components";''
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { SafeAreaView, TouchableOpacity } from "react-native"
// import {StatusBar} from "native-base";
// import { useNavigation } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import { getData } from "../src/utils/localStorage";

// const DetailProfile = ({ navigation }) => {
//     const {profile, setProfile} = useState(null);
//     const getUserData = () => {
//         getData("user").then((res) => {
//             const data = res;
//             if (data) {
//                 console.log ("isi data", data);
//                 setProfile(data);
//             } else {
//                 //navigation.replace('login')
//             } 
//         });
//     };

//     useEffect(() => {
//         const unsubscribe = navigation.addListener("focus", () => {
//             getUserData();
//         });

//         return () => {
//             unsubscribe();
//         };
//     }, [navigation]);
   
//     return(

//         <>
//         <Header title={"Profile"} withBack = {"true"}/>
//         <SafeAreaView>
//         <Box mb={10} alignItems="center">
//             <StatusBar backgroundColor={"white"} barStyle={"dark-content"} ></StatusBar>
        
//             <Ionicons name="person-circle" size={"90"} alignSelf={"center"} color={"grey"} style={{marginTop: 10}}></Ionicons>
//                 <Box>
//                     <Heading alignItems="center" fontSize="20" mr="2" mt={3}>{profile?.username}</Heading>
//                     <Heading alignItems= "center" ml={"7"} fontWeight="300" fontSize="18"> {profile?.status}</Heading>
//                 </Box>


//             <ScrollView> 
//             <Box backgroundColor="#FFFFFF" height="" width={300} borderRadius={12} alignSelf="center" mb={30} mt={8} padding={2}>  
//                 <Box>
//                    
//                         <TouchableOpacity onPress={()=> navigation.navigate("DetailProfile")}>
//                             <Box backgroundColor="#82a9f4" height={6} width={60} borderRadius={5} mt={3} mr={4} alignSelf={"flex-end"}>
//                                 <Text color={"white"} fontSize={17} textAlign="center">Edit</Text>
//                             </Box>
//                          </TouchableOpacity>
//                    
//                     <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Username</Text>
//                     <Text color={"black"} fontSize={16} ml={5} mt="-2"></Text>
//                     <Text color={"black"} fontSize={16} ml={5} mt="0" mb="5">{profile?.username}</Text>
//                 </Box>
            
//                 <Box>
//                     <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Email</Text>
//                     <Text color={"black"} fontSize={16} ml={5} mt="-2"></Text>
//                     <Text color={"black"} fontSize={16} ml={5} mt="0" mb="5">andremaulana@gmail.com</Text>
//                 </Box>

//                 <Box>
//                     <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Phone Number</Text>
//                     <Text color={"black"} fontSize={16} ml={5} mt="-2"></Text>
//                     <Text color={"black"} fontSize={16} ml={5} mt="0" mb="5" >08134627642882</Text>
//                 </Box>

//                 <Box>
//                     <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Adress</Text>
//                     <Text color={"black"} fontSize={16} ml={5} mt="-2"></Text>
//                     <Text color={"black"} fontSize={16} ml={5} mt="0">Jl. Ketintang Selatan II no.1</Text>
//                 </Box>
//            </Box>
//            </ScrollView>  
//         </Box>
//         </SafeAreaView>
//         </>
//     );
// };

// export default DetailProfile;