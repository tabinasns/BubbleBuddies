import React from "react";
import { useState } from "react";
import { FlatList, HStack, Center, VStack, Box, Heading, Image, Text, ScrollView } from "native-base";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import datas from "../datas";

const AddList = () => {
  const navigation = useNavigation();

  const renderitem = ({ item, index }) => {
    return (
      <Box key={item.id}>
        <Box borderRadius={"10"} shadow={"1"} mb={5} bgColor={"white"}>
          <HStack>
            <Box flexDirection="row">
              <Image
                source={{ uri: item.image }}
                w="70"
                h="70"
                m={"6"}
                alt="Image Data"
              />
            </Box>
            <VStack>
              <Box flex={1.8}>
                <Heading pl={"6"} pt={"3"} fontWeight={"800"} mt={"5"}>
                  {item.type}
                </Heading>
              </Box>
              <Box>
                <Text fontSize={"sm"} pl={"6"} pb={"6"}>
                  {item.price}
                </Text>
              </Box>
            </VStack>
            <HStack pl={"6"} pt={"45"}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => handleDecrement(index)}>
                <Ionicons name="remove-circle-outline" size={20} color="#82a9f4" />
              </TouchableOpacity>
              <Text ml={"2"} mr={"2"}>{counters[index]}</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={() => handleIncrement(index)}>
                <Ionicons name="add-circle-outline" size={20} color="#82a9f4" />
              </TouchableOpacity>
            </HStack>
          </HStack>
        </Box>
      </Box>
    );
  };

  const initialCounters = new Array(datas.length).fill(0);
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  }

  const handleDecrement = (index) => {
    const newCounters = [...counters];
    newCounters[index] -= 1;
    if (newCounters[index] < 0) {
      newCounters[index] = 0;
    }
    setCounters(newCounters);
  }

  const renderItems = datas.map((item, index) => renderitem({ item, index }));

  return (
    <>

      <Header title={"Add List"} withBack={true} />
      <Box py={"4"} bg="#82a9f4">
        <Box py={"5"} bg="#f6f6f6" w={"full"} borderRadius={"40"} mt={"30"} pt={"10"} pl={"10"} pr={"10"} pb={"30"} mb={"20"}>
          <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <FlatList
              data={datas}
              renderItem={renderitem}
              keyExtractor={(item) => item.id}
            />
            <Box py={"4"}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CheckoutOrder')}>
                <Box py={"2"} bg="#82a9f4" borderRadius={"10"}>
                  <Center>
                    <Heading color="white" fontSize={"20"}>
                      Next
                    </Heading>
                  </Center>

      <SafeAreaView>
          <Box bg={"#82a9f4"}>
            <Header title={"Add List"} withBack={true} />
            <Box py={"5"} bg="#f6f6f6" w={"full"} h={"full"} borderTopRadius={"40"}  pt={"5"} pl={"10"} pr={"10"} pb={"5"}>
              <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                {renderItems}
                <Box py={"4"}>
                  <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CheckoutOrder')}>
                    <Box py={"2"} bg="#82a9f4" borderRadius={"10"}>
                      <Center>
                        <Heading color="white" fontSize={"20"}>
                          Next
                        </Heading>
                      </Center>
                    </Box>
                  </TouchableOpacity>

                </Box>
              </ScrollView>
            </Box>
          </Box>
      </SafeAreaView>
    </>
  );
};

export default AddList;
