import { Heading, Center } from "native-base";
import { Header } from "../components";

const AddList = () => {
  return (
    <>
      <Header title={"AddList"} withBack="true"/>
      <Center flex={1}>
        <Heading>AddList</Heading>
      </Center>
    </>
  );
};

export default AddList;
