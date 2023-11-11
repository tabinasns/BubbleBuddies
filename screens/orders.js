import { useNavigation } from "@react-navigation/native";
import { Box, Button, HStack, Heading, Image, ScrollView, Text } from "native-base";
import { useState } from "react";
import { Header } from "../components";

const Orders = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  
  const handleButtonPress = () => {
    navigation.navigate('DetailOrder'); 
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#82a9f4', 
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
  };

  const textStyle = {
    color: isPressed ? 'black' : '#82a9f4',
  };
  return (
    <>
      <Box py={"4"} bg="#82a9f4">
        <Box mb={10}>
        <Header withBack="true" title={"Orders"} />
        </Box>
      </Box>
      <Box py={"5"} bg="#f6f6f6" w={"full"} borderRadius={"40"} top={"-40"} pt={"5"} pl={"10"} pr={"10"} pb={"5"}>
        <Box alignItems="flex-start" mt={5} ml={8}>
        <Button
          onPress={() => console.log('aaaa')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={buttonStyle}>
            <Text style={textStyle}>Active</Text>
        </Button>
        </Box>
        <Box alignItems="flex-end" top={-32} mr={8}>
          <Text> Completed</Text>
        </Box>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
          <Box p={"3"} bgColor="white" borderRadius={"10"} shadow="2" mt="5">
            <HStack>
              <Image 
                source={require('../assets/washIron.png')}
                alt="Alternate Text"
                size={"79"}
                mr={"2"}
              />
              <Heading p={"3"} fontSize={"20"} lineHeight={"25"}>
                Order #100{"\n"}
                <Text fontSize={"15"} fontWeight={"500"}>19 Oktober 2023{"\n"}</Text>
                <Text fontSize={"15"} fontWeight={"500"}>Rp 8.000</Text>
              </Heading>
            </HStack>
            <Button onPress={handleButtonPress} style={{backgroundColor: "#82a9f4"}}>Order Details</Button>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
};

export default Orders;
