import { Flex, Spin } from "antd";

const Loader = () => {
  return (
      <Flex align="center" justify="center" style={{ height: "100vh" }}>
        <Spin size="large" />
      </Flex>
  );
};

export default Loader;
