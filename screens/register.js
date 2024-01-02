import React, {useState,useEffect} from "react";
import {Text, TouchableOpacity} from "react-native";
import { KeyboardAvoidingView, Form, Select, View, HStack, Heading, FormControl, Input, VStack, Button, Box, Modal, ModalBackdrop, AlertText, Alert, ScrollView } from "native-base";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { registerUser } from "../src/actions/AuthAction";


const Register =() => {
    const [username,setUsername] = useState ("");
    const [email,setEmail] = useState ("");
    const [telp,setTelp] = useState ("");
    const [alamat, setAlamat] = useState ("")
    const [password,setPassword] = useState("");

    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const [modalContent, setModalContent] = useState({
        title: "",
        message: "",
      });
     
      const onRegister = async () => {
        if (email && password.length >= 6) {
            if (!selectedProvinceName || !selectedRegencyName || !selectedDistrictName || !selectedVillageName) {
                setModalContent({
                  title: "Data Tidak Lengkap",
                  message: "Mohon lengkapi data alamat sebelum melakukan registrasi.",
                });
                toggleModal();
                return; 
              }
            const alamatData = [alamat, selectedProvinceName, selectedRegencyName, selectedDistrictName, selectedVillageName]
            .filter((value) => value !== null && value !== undefined)
            .join(', '); 

        
          const data = {
            email: email,
            username: username,
            alamat: alamatData,
            telp: telp,
            status: "user",
            
          };
    
          try {
            await registerUser(data, password);
            setModalContent({
              title: "Registrasi Berhasil",
              message: "Registrasi berhasil! Anda dapat login sekarang.",
            });
            toggleModal();
          } catch (error) {
            if (error) {
              setModalContent({
                title: "Registrasi Gagal",
                message: "Format email salah atau telah digunakan. Silakan gunakan email lain.",
              });
              toggleModal();
            }
          }
        } else {
          setModalContent({
            title: "Data Tidak Lengkap",
            message: "Data yang dimasukkan tidak lengkap atau password harus minimal 6 karakter.",
          });
          toggleModal();
        }
      };

    const handleBack = () => {
        navigation.navigate("Landing");
    };

    const isPasswordValid = password.length >= 6;

    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [regencies, setRegencies] = useState([]);
    const [selectedRegency, setSelectedRegency] = useState(null);
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [villages, setVillages] = useState([]);
    const [selectedVillage, setSelectedVillage] = useState(null);
  
    useEffect(() => {
      // Fetch data for provinces on component mount
      fetch('https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json')
        .then((response) => response.json())
        .then((data) => setProvinces(data))
        .catch((error) => console.error('Error fetching provinces:', error));
    }, []);
    const selectedProvinceData = provinces.find((province) => province.id === selectedProvince);
    const selectedProvinceName = selectedProvinceData ? selectedProvinceData.name : '';
    
    const selectedRegencyData = regencies.find((regency) => regency.id === selectedRegency);
    const selectedRegencyName = selectedRegencyData ? selectedRegencyData.name : '';
    
    const selectedDistrictData = districts.find((district) => district.id === selectedDistrict);
    const selectedDistrictName = selectedDistrictData ? selectedDistrictData.name : '';

    const selectedVillageData = villages.find((village) => village.id === selectedVillage);
    const selectedVillageName = selectedVillageData ? selectedVillageData.name : '';
  
    const handleProvinceChange = (provinceId) => {
        setSelectedProvince(provinceId); 
        setRegencies([]);
        setDistricts([]); 
        setVillages([]);    
        // Fetch regencies based on selected province
        fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`)
          .then((response) => response.json())
          .then((data) => setRegencies(data))
          .catch((error) => console.error('Error fetching regencies:', error));
      };
  
    const handleRegencyChange = (regencyId) => {
      setSelectedRegency(regencyId);
      setDistricts([]); // Atur ulang nilai districts menjadi array kosong
      setVillages([]);   
      // Fetch districts based on selected regency
      fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`)
        .then((response) => response.json())
        .then((data) => setDistricts(data))
        .catch((error) => console.error('Error fetching districts:', error));
    };
  
    const handleDistrictChange = (districtId) => {
      setSelectedDistrict(districtId);
      setVillages([]); 
      // Fetch villages based on selected district
      fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/villages/${districtId}.json`)
        .then((response) => response.json())
        .then((data) => setVillages(data))
        .catch((error) => console.error('Error fetching villages:', error));
    };

    return (
        <View flex={1} bg={"#f7f6fd"} alignContent={"center"} px={10} pt={20}>
            <TouchableOpacity title="Back to Landing" onPress={handleBack}><Text marginBottom={50} marginTop={-30} ><Ionicons name="arrow-back-outline" size={32} color="#373248" /><Text/></Text></TouchableOpacity> 
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>        
            <Text style={{
                fontSize: 28,
                color:"#373248",
                fontWeight:"bold",
                textAlign:"center",
                paddingBottom:12,
            }}>
                Register
            </Text>

            <Text style={{
                textAlign:"center",
                fontSize:16,
            }}>
                  <Text>Silahkan Masukkan Data Diri Anda</Text>
            </Text>
            <VStack pt={8}>

                <FormControl>
                    <FormControl.Label>Username / Nama</FormControl.Label>
                        <Input
                        value={username}
                        onChangeText={(username) => setUsername(username)}
                        placeholder="Enter Your Username"/>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholder="Enter Your Email"
                        w={"full"}/>
                    <FormControl.Label>Password</FormControl.Label>
                        <Input
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder="Enter Your Password"
                        type="password"/>
                        {password.length < 6 && (
                        <Text style={{ color: 'red' }}>
                            Password should be at least 6 characters long.
                        </Text>
                        )}

                    <FormControl.Label>No Telp</FormControl.Label>
                        <Input
                        value={telp}
                        onChangeText={(telp) => setTelp(telp)}
                        placeholder="Enter Your Phone Number"
                        keyboardType="phone-pad"
                        w={"full"}/>
                    <FormControl.Label>Alamat</FormControl.Label>
                    <FormControl.Label marginLeft={3}>Provinsi</FormControl.Label>
                    <Select
                    placeholder="Select Province"
                    selectedValue={selectedProvince}
                    onValueChange={(value) => handleProvinceChange(value)}
                    >
                    {provinces.map((province) => (
                        <Select.Item label={province.name} value={province.id} key={province.id} />
                    ))}
                    </Select>

                    {/* Select for Regencies */}
                    <FormControl.Label marginLeft={3}>Kabupaten/Kota</FormControl.Label>
                    <Select
                    placeholder="Select Regency"
                    selectedValue={selectedRegency}
                    onValueChange={(value) => handleRegencyChange(value)}
                    disabled={!selectedProvince} // Disable when no province is selected
                    >
                    {regencies.map((regency) => (
                        <Select.Item label={regency.name} value={regency.id} key={regency.id} />
                    ))}
                    </Select>

                    {/* Select for Districts */}
                    <FormControl.Label marginLeft={3}>Kecamatan</FormControl.Label>
                    <Select
                    placeholder="Select District"
                    selectedValue={selectedDistrict}
                    onValueChange={(value) => handleDistrictChange(value)}
                    disabled={!selectedRegency} // Disable when no regency is selected
                    >
                    {districts.map((district) => (
                        <Select.Item label={district.name} value={district.id} key={district.id} />
                    ))}
                    </Select>

                    {/* Select for Villages */}
                    <FormControl.Label marginLeft={3}>Desa</FormControl.Label>
                    <Select
                    placeholder="Select Village"
                    selectedValue={selectedVillage}
                    onValueChange={(value) => setSelectedVillage(value)}
                    disabled={!selectedDistrict} // Disable when no district is selected
                    >
                    {villages.map((village) => (
                        <Select.Item label={village.name} value={village.id} key={village.id} />
                    ))}
                    </Select>          
                    <FormControl.Label>Alamat Lengkap</FormControl.Label>
                        <Input
                        value={alamat}
                        onChangeText={(alamat) => setAlamat(alamat)}
                        placeholder="Enter Your Address"
                        w={"full"}/>
                </FormControl>
                <Box>
                    <Button  mt={6} bg={"#82a9f4"} title="Register" onPress={() => {onRegister();}}>Registrasi</Button>
                    <Text style={{
                        textAlign:"center",
                        fontWeight:"bold",
                        marginTop:40}}>
                        Atau login dengan 
                    </Text>
                    <Modal isOpen={showModal} onClose={onCloseModal}>
                        <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>{modalContent.title}</Modal.Header>
                        <Modal.Body>
                            <Text>{modalContent.message}</Text>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onPress={onCloseModal}>Tutup</Button>
                        </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </Box>
            <View style={{
                flexDirection:"row",
                marginHorizontal:"20",
                marginTop:40
            }}>
                <TouchableOpacity style={{
                    backgroundColor:"#ffffff",
                    flex:1,
                    paddingVertical:10,
                    borderRadius:9,
                    justifyContent:"center",
                    alignItems:"center",
                    marginRight:10,
                    elevation:2,
                }}>
                    <AntDesign name="google" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor:"#ffffff",
                    flex:1,
                    paddingVertical:10,
                    borderRadius:9,
                    justifyContent:"center",
                    alignItems:"center",
                    marginRight:10,
                    elevation:2,
                }}>
                    <FontAwesome5 name="facebook" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor:"#ffffff",
                    flex:1,
                    paddingVertical:10,
                    borderRadius:9,
                    justifyContent:"center",
                    alignItems:"center",
                    marginRight:10,
                    elevation:2,
                }}>
                    <AntDesign name="apple1" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login') }style={{
                marginTop:20,
                marginRight:20
            }}>
                <Text style={{
                    textAlign:"center",
                    fontWeight:"bold",
                    marginTop:30
                }}>
                    Sudah member ? <Text style={{color:"#82A9F4"}}>Login Disini</Text>
                </Text>
            </TouchableOpacity>
            </VStack>
            </ScrollView>  
        </View>
    )
}

export default Register;