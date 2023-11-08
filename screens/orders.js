import { Center, Heading } from "native-base";
import { Header } from "../components";

const NewsDetail = () => {
  return (
    <>
      <Header withBack="true" title={"Order"} />
      <Center flex={1} p={"4"}>
        <Heading textAlign={"center"}>Order</Heading>
      </Center> 
    </>
  );
};

export default NewsDetail;