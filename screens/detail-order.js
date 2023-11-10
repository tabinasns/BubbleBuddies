import { Heading, Box, HStack, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Header } from "../components"

const DetailOrder = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('ListImage'); 
  };

  return (
    <>
    <Box py={"4"} bg="#82a9f4">
    <Header withBack="true" title={"Details about"} />
        <Box mt={-3} mb={-5}>
            <Text bold  color="white" textAlign="center" fontSize={"20"} >Order #100</Text> 
        </Box>
    </Box>
    <Box flex={1} bg="#82a9f4" p={10}>
        <Box p={"3"} bgColor="white" borderRadius={"10"} shadow="2" mt="5" height={350}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 11 }}>
                <Text bold fontSize={"20"} lineHeight={"50"}>Order Details{"\n"}</Text>
            </View>
            <HStack>
              <Heading fontSize={"20"} lineHeight={"25"} ml={3}>
                <Text style={{color:"#82a9f4"}}>WASH & IRON{"\n"}</Text>
              </Heading>
            </HStack>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginLeft: 11,marginRight: 11 }}>
            <Text bold>2 x T-shirt</Text>
            <Text>Rp 5.000</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginLeft: 11, marginRight: 11 }}>
            <Text bold>1 x Blazer</Text>
            <Text>Rp 3.000</Text>
            </View>
            <TouchableOpacity onPress={handleButtonPress} style={{marginTop: 25, marginBottom: 25,  marginLeft: 11, }}>
                <Text style={{color:"#82a9f4"}}>View Image</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50,  marginLeft: 11, marginRight: 11 }}>
            <Text bold fontSize={"20"}>Total</Text>
            <Text>Rp 8.000</Text>
            </View>
        </Box>
    </Box>
    </>
  );
};

export default DetailOrder;
