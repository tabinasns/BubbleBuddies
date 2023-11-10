import React from 'react';
import { Box, HStack, Center } from 'native-base';
import { Header } from '../components';

const ListImage = () => {
  return (
    <>
      <Box bg="#82a9f4">
        <Box mb={10}>
          <Header withBack="true" title={'Detail Image'} />
        </Box>
      </Box>
      <HStack mt={10} space={30} justifyContent="center">
        <Box>
          <Center ml={5} h="40" w="40" bg="muted.300" rounded="md" shadow={3} />
          <Center mt={10} ml={5} h="40" w="40" bg="muted.300" rounded="md" shadow={3} />
        </Box>
        <Box>
          <Center mr={5} h="40" w="40" bg="muted.300" rounded="md" shadow={3} />
          <Center mt={10} mr={5} h="40" w="40" bg="muted.300" rounded="md" shadow={3} />
        </Box>
      </HStack>
    </>
  );
};

export default ListImage;
