import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Box, Button, HStack, Heading, Image, Text, FlatList, Spinner } from "native-base";
import { Header } from '../components';
import { useNavigation } from "@react-navigation/native";
import { getData } from "../src/utils";
import { getOrder } from "../src/actions/AuthAction";

const Orders = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true); 
    const [orderData, setOrderData] = useState([]);
      
      useEffect(() => {
        const fetchOrderData = async () => {
          try {
            const userData = await getData('user');
            const userId = userData.uid;
            const fetchedOrder = await getOrder(userId);
            if (fetchedOrder) {
              const orders = Object.entries(fetchedOrder).map(([orderId, orderData]) => ({
                orderId,
                ...orderData,
              }));
              setOrderData(orders);
              setLoading(false);
            }
          } catch (error) {
            console.error('Error fetching order data:', error);
          }
        };
      
        const interval = setInterval(() => {
          fetchOrderData();
        }, 1000); 
        return () => clearInterval(interval);
      }, []);

  const pages = [
    { key: 'page1', text: 'Active', content: 
    <Box>
    {loading ? (
      <Spinner size="lg" color="#82a9f4" />
    ) : (
      <FlatList
      data={orderData.filter((orderItem) => orderItem.status === 0)}
      renderItem={({ item: orderItem, index: orderIndex }) => {
        let serviceImage = '';

        switch (orderItem.service) {
          case 'Wash & Iron':
            serviceImage = require('../assets/washIron.png');
            break;
          case 'Wash':
            serviceImage = require('../assets/wash.png');
            break;
          case 'Ironing':
            serviceImage = require('../assets/iron.png');
            break;
          default:
            serviceImage = '';
            break;
        }

        return (
          <Box key={orderIndex} p={"3"} bgColor="white" borderRadius={"10"} shadow="2" marginBottom={5}>
            <HStack>
              <Image 
                source={serviceImage}
                alt="Alternate Text"
                size={"79"}
                mr={"1"}
              />
              <Heading p={"3"} fontSize={"20"} lineHeight={"25"}>
                Order #{orderItem.orderNumber}{"\n"}
                <Text fontSize={"15"} fontWeight={"500"}>{orderItem.date}{"\n"}</Text>
                <Text fontSize={"15"} fontWeight={"500"}>Rp {orderItem.total}</Text>
              </Heading>             
            </HStack>
            <Button onPress={() => navigation.navigate('DetailOrder', { 
              orderService: orderItem.service, 
              orderTotal: orderItem.total, 
              orderProducts: orderItem.products,
              orderNumber: orderItem.orderNumber,
              orderStatus: orderItem.status,
              orderId: orderItem.orderId,
              orderEvidence: orderItem.evidence
            })} style={{ backgroundColor: "#82a9f4" }}>Order Details</Button>
          </Box>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />      
    )}
  </Box>  },
    { key: 'page2', text: 'Complete',
    content: 
    <Box>
    {loading ? (
      <Spinner size="lg" color="#82a9f4" />
    ) : (
      <FlatList
      data={orderData.filter((orderItem) => orderItem.status === 1)}
      renderItem={({ item: orderItem, index: orderIndex }) => {
        let serviceImage = '';

        switch (orderItem.service) {
          case 'Wash & Iron':
            serviceImage = require('../assets/washIron.png');
            break;
          case 'Wash':
            serviceImage = require('../assets/wash.png');
            break;
          case 'Ironing':
            serviceImage = require('../assets/iron.png');
            break;
          default:
            serviceImage = '';
            break;
        }

        return (
          <Box key={orderIndex} p={"3"} bgColor="white" borderRadius={"10"} shadow="2" marginBottom={5}>
            <HStack>
              <Image 
                source={serviceImage}
                alt="Alternate Text"
                size={"79"}
                mr={"1"}
              />
              <Heading p={"3"} fontSize={"20"} lineHeight={"25"}>
                Order #{orderItem.orderNumber}{"\n"}
                <Text fontSize={"15"} fontWeight={"500"}>{orderItem.date}{"\n"}</Text>
                <Text fontSize={"15"} fontWeight={"500"}>Rp {orderItem.total}</Text>
              </Heading>             
            </HStack>
            <Button onPress={() => navigation.navigate('DetailOrder', { 
              orderService: orderItem.service, 
              orderTotal: orderItem.total, 
              orderProducts: orderItem.products,
              orderNumber: orderItem.orderNumber,
              orderStatus: orderItem.status,
              orderId: orderItem.orderId,
              orderEvidence: orderItem.evidence
            })} style={{ backgroundColor: "#82a9f4" }}>Order Details</Button>
          </Box>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />      
    )}
  </Box> }
  ];
  const [activePage, setActivePage] = React.useState(0);

  const changePage = (pageIndex) => {
    setActivePage(pageIndex);
    pagerRef.current.setPage(pageIndex);
  };

  const renderTabs = () => {
      const buttonStyle = {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#82a9f4', 
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderRadius: 0,
      };

      const buttonStyleTwo = {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: "transparent",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderRadius: 0,
        color: 'white',
      };
      const textStyle = {
        color: '#82a9f4',
      };
      const textStyleTwo = {
        color: 'black',
      };


    return (
        <>
        <Box backgroundColor={"#82a9f4"} width={"full"} height={200} >
            <Header withBack={true} title={"Orders"} /> 
        </Box>
        <Box bg="#f6f6f6" w={"full"} marginTop={-50} borderRadius={"40"} pt={"5"} pl={"10"} pr={"10"} pb={"5"}>
        <HStack space={100} style={{
        backgroundColor: '#f6f6f6',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop:15,
        }}
        >
        {pages.map((page, index) => (
          <Button
            key={index}
            style={[
                activePage === index ? buttonStyle : buttonStyleTwo,
              ]}
            onPress={() => changePage(index)}
          >
            <Text style={activePage === index  ? textStyle : textStyleTwo}>{page.text}</Text>
          </Button>
        ))}
        </HStack>
        </Box>
        </>
    );
  };

  const pagerRef = useRef(null);

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6', }}>
        
      {renderTabs()}
      <PagerView
        ref={pagerRef}
        style={{ flex: 1, }}
        initialPage={activePage}
        onPageSelected={(event) => {
        setActivePage(event.nativeEvent.position);
        }}
      >
        {pages.map((page, index) => (
        <Box key={index} px={10} >
            <Box>
                <Box>{page.content}</Box>
            </Box>
        </Box>
  ))}
      </PagerView>
    </SafeAreaView>
  );
}

export default Orders;