import React, {useState} from "react";
import {Text, TouchableOpacity} from "react-native";
import { View, FormControl, Input, VStack, Button, Box,} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Lupa = () => {
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
                Lupa Password
            </Text>
            <Text style={{
                textAlign:"center",
                fontSize:16,
            }}>
                <Text>Masukan password baru anda  </Text>
            </Text>
            <Box alignContent={"center"} justifyContent={"center"} pt={100}>
                <VStack pt={8}>
                    <FormControl>
                        <FormControl.Label>New Password</FormControl.Label>
                        <Input
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter Your New Password"
                        type="password"
                        w={"full"}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>New Password</FormControl.Label>
                        <Input
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter Your New Password"
                        type="password"
                        w={"full"}
                        />
                    </FormControl>
                    <Button mt={6} bg={"#82a9f4"} onPress={handleSubmit}>Konfirmasi</Button>
                    <Text style={{
                        textAlign:"center",
                        fontWeight:"bold",
                        marginTop:40
                    }}>
                    </Text>
                </VStack>
            </Box>
        </View>
    );
};

export default Lupa;