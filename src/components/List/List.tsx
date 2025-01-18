import { Typography, Input, Table } from "antd";
import { useState } from "react";
import { useEmployees } from "../../api/api";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import Loader from "../Loader/Loader";

const columns = [
  {
    title: "Ф.И.О.",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Департамент",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Должность",
    dataIndex: "post",
    key: "post",
  },
];

const List = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const debounceSearch = useDebounce(search);

  const {
    data: listEmployees,
    isLoading,
  } = useEmployees({
    page: currentPage,
    limit: 5,
    search: debounceSearch,
  });

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const dataSource =
    listEmployees?.data.map((employee) => ({
      ...employee,
      key: employee.id,
      fullName: `${employee.firstName} ${employee.lastName} ${employee.middleName}`,
    })) || [];

  return (
    <>
      <Typography.Title>Список сотрудников:</Typography.Title>
      <Input
        placeholder="Введите имя, фамилию или отчество сотрудника"
        value={search}
        onChange={handleSetSearch}
      />
      <Table
        sticky
        dataSource={dataSource}
        columns={columns}
        onRow={(item) => ({
          onClick: () => navigate(`/QualityPoint/employee/${item.id}`),
          style: { cursor: "pointer" },
        })}
        pagination={{
          current: currentPage,
          total: listEmployees?.total || 0,
          pageSize: listEmployees?.limit || 10,
          position: ["bottomCenter"],
          onChange: (page: number) => {
            setCurrentPage(page);
          },
        }}
      />
      {isLoading && <Loader />}
    </>
  );
};

export default List;
