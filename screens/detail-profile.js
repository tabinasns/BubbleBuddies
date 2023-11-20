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
        
            <Ionicons name="person-circle" size={"90"} alignSelf={"center"}  color={"grey"} ></Ionicons>
                <Box>
                    <Heading alignItems="center" fontSize="20" mr="2"> Iqmal Rangga Hanz </Heading>
                    <Heading alignItems= "center" ml={"12"} fontWeight="300" fontSize="18"> Customer</Heading>
                </Box>
            <ScrollView>  
            <Box backgroundColor="#FFFFFF" height="16" width={300} borderRadius={12} alignSelf="center" mb={30} mt={5}>
                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Username</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{username}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0">Iqmal Rangga Hanz</Text>
                </Box>
           </Box>

           <Box backgroundColor="#FFFFFF" height="16" width={300} borderRadius={12} alignSelf="center" mb={30} mt={1}>
                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Email</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{email}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0">iqmalranggahanz@gmail.com</Text>
                </Box>
           </Box>

           <Box backgroundColor="#FFFFFF" height="16" width={300} borderRadius={12} alignSelf="center" mb={30} mt={1}>
                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Phone Number</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{phoneNumber}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0">08134627642882</Text>
                </Box>
           </Box>

           <Box backgroundColor="#FFFFFF" height="16" width={300} borderRadius={12} alignSelf="center" mb={30} mt={1}>
                <Box>
                    <Text color={"black"} fontSize={17} ml={5} mt="1" bold="5">Adress</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="-2">{adress}</Text>
                    <Text color={"black"} fontSize={16} ml={5} mt="0">Jl. Ketintang Selatan II no.1</Text>
                </Box>
           </Box>
           </ScrollView>  
        </Box>
        </>
    );
};

export default DetailProfile;