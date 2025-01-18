import { Flex, Typography } from "antd"
import { TItemEmployee } from "../../../types/empoyees.types";

const ItemEmployee = ({title, description}: TItemEmployee) => {
  return (
    <Flex gap={10} >
       <Typography.Text strong>{title}:</Typography.Text>
       <Typography.Text>{description} </Typography.Text>

    </Flex>
  )
}

export default ItemEmployee;