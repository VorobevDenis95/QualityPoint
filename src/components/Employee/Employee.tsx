import { useNavigate, useParams } from "react-router-dom";
import { useEmployeeId } from "../../api/api";
import ImageToBase64 from "../ImageBase64/ImageBase64";
import { Button, Flex, Space } from "antd";
import formatDate from "../../utils/formatDate";
import ItemEmployee from "./ItemEmployee/ItemEmployee";
import Loader from "../Loader/Loader";

const Employee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useEmployeeId(id || "");


  return (
    <>
      <Button onClick={() => navigate(-1)}>Назад</Button>
      {isLoading && <Loader />}
      {data && (
        <>
          <Flex align="center" justify="center" gap={100}>
            <ImageToBase64 url={data.photo} />
            <Space direction="vertical" size={16}>
              <ItemEmployee title="Фамилия" description={data.lastName} />
              <ItemEmployee title="Имя" description={data.firstName} />
              <ItemEmployee title="Отчетство" description={data.middleName} />
              <ItemEmployee title="Дата рождения" description={formatDate(data.birthday)} />
              <ItemEmployee title="Департамент" description={data.department} />
              <ItemEmployee title="Должность" description={data.post} />
              <ItemEmployee title="Зарплата" description={data.salary.toLocaleString('ru') + '  ₽'} />
            </Space>
          </Flex>
        </>
      )}
    </>
  );
};

export default Employee;
