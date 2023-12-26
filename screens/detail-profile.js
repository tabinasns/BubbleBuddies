import { Heading, Center, Text, Box, HStack, Button, ScrollView } from "native-base";
import { Header } from "../components";''
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native"
import {StatusBar} from "native-base";

const DetailProfile = ({ username, email, phoneNumber, adress }) => {
    return(

        <>
        <Header title={"Profile"} withBack = {"true"} p={5}/>
        <Box mb={50} alignItems="center">
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} ></StatusBar>
        
            <Ionicons name="person-circle" size={"90"} alignSelf={"center"}  color={"grey"} style={{marginTop: 20}}></Ionicons>
                <Box>
                    <Heading alignItems="center" fontSize="20" mr="2"> Andre Maulana </Heading>
                    <Heading alignItems= "center" ml={"7"} fontWeight="300" fontSize="18"> Customer</Heading>
                </Box>


            <ScrollView> 
            <Box backgroundColor="#FFFFFF" height="" width={300} borderRadius={12} alignSelf="center" mb={30} mt={8} padding={2}>  
                <Box>
                    {/* <HStack style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 11, marginRight: 11 }}>
                        <Text color={"black"} fontSize={17} ml={2} mt="1" bold="5">Username</Text> */}
                        <TouchableOpacity onPress={()=> navigation.navigate("DetailProfile")}>
                            <Box backgroundColor="#82a9f4" height={6} width={60} borderRadius={5} mt={3} mr={4} alignSelf={"flex-end"}>
                                <Text color={"white"} fontSize={17} textAlign="center">Edit</Text>
                            </Box>
                         </TouchableOpacity>
                    {/* </HStack> */}
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Username</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{username}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0" mb="5">Andre Maulana</Text>
                </Box>
            
                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Email</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{email}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0" mb="5">andremaulana@gmail.com</Text>
                </Box>

                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Phone Number</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{phoneNumber}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0" mb="5" >08134627642882</Text>
                </Box>

                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Adress</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{adress}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0">Jl. Ketintang Selatan II no.1</Text>
                </Box>
           </Box>

           {/* <Box backgroundColor="#FFFFFF" height="16" width={300} borderRadius={12} alignSelf="center" mb={30} mt={1}>
                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Email</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{email}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0">andremaulana@gmail.com</Text>
                </Box>
           </Box> */}

           {/* <Box backgroundColor="#FFFFFF" height="16" width={300} borderRadius={12} alignSelf="center" mb={30} mt={1}>
                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Phone Number</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{phoneNumber}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0">08134627642882</Text>
                </Box>
           </Box> */}

           {/* <Box backgroundColor="#FFFFFF" height="16" width={300} borderRadius={12} alignSelf="center" mb={30} mt={1}>
                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Adress</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{adress}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0">Jl. Ketintang Selatan II no.1</Text>
                </Box>
           </Box> */}
           </ScrollView>  
        </Box>
        </>
    );
};

export default DetailProfile;