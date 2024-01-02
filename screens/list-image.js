// Di halaman ListImage
import React, { useState } from 'react';
import { Box, ScrollView, FlatList, Image } from 'native-base';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Header } from '../components';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing
} from 'react-native-reanimated';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ListImage = ({ route }) => {
  const { evidence: orderEvidence } = route.params;
  const scale = useSharedValue(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 250, easing: Easing.inOut(Easing.ease) }) }],
    };
  });

  const handleImagePress = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
    scale.value = 1; 
  };

  return (
    <>
      <Box bg="#82a9f4">
        <Header withBack="true" title={'Detail Image'} />
      </Box>
      <FlatList
        data={orderEvidence}
        renderItem={({ item: imageUrl, index }) => (
          <TouchableOpacity onPress={() => handleImagePress(imageUrl)} style={{ margin: 10}}>
            <Box
            shadow={2}
            bg="white"
            borderRadius={10}
            >           
            <Image
              source={{ uri: imageUrl }}
              resizeMode="cover"
              alt='hahaa'
              style={{
                width: 160,
                height: 160,
                borderRadius: 10,
              }}
            />  
            </Box>         
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
      />

      {selectedImage && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: screenWidth,
            height: screenHeight,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
          onPress={closeImage}
        >
          <Animated.Image
            source={{ uri: selectedImage }}
            resizeMode="contain"
            style={[
              {
                width: screenWidth,
                height: screenHeight,
              },
              imageStyles,
            ]}
          />
        </TouchableOpacity>
      )}

    </>
  );
};

export default ListImage;
