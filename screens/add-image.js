import { Box, Image } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Header } from '../components';

const AddImage = () => {
    return (
        <>
        <Box bg={"#82A9F4"}>
            <Header withBack="true" title={'Add Image'} />
                <Box>
                    <Image
                        source={require('../assets/displayCamera.png')}
                        w="full"
                        h="500"
                        alt="display image"
                    />
                </Box>
                <Box
                    bg={'#82A9F4'}
                    h={'80'}
                    w={'full'}
                    justifyContent="space-between"
                    alignItems="center">
                    <TouchableOpacity>
                        <Box p={"50"}>
                            <Image
                            source={require('../assets/buttonCamera.png')}
                            w="12"
                            h="12"
                            p="5"
                            alt="display image"
                        />
                        </Box>
                    </TouchableOpacity>
                </Box>
        </Box>
        </>
    );
};

export default AddImage;