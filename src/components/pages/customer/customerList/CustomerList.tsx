import { useCustomersQuery } from "@/redux/features/customer/customerApi";
import Table from "@/shared/ui/table";
import moment from "moment";
import style from "./customerList.module.scss";

interface CustomerSchema {
  _id: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  createdAt?: string;
}
const columns = [
  { _id: "sl", title: "SL", dataIndex: "sl" },
  { _id: "name", title: "Name", dataIndex: "name" },
  { _id: "email", title: "Email", dataIndex: "email" },
  { _id: "phone", title: "Phone", dataIndex: "phone" },
  { _id: "address", title: "Address", dataIndex: "address" },
  { _id: "createdAt", title: "CreatedAt", dataIndex: "createdAt", width:150, },
];
const CustomerList = () => {
  const { data, error, isLoading } = useCustomersQuery({
    pageNo: 1,
    perPage: 10,
    searchKey: 0,
  });

  const dataWithSl = data?.rows?.map((item: CustomerSchema, index: number) => ({
    ...item,
    createdAt: moment(item.createdAt).format("MMM DD, YYYY"),
    sl: index + 1,
  }));


  return (
    <div className={style.wrapper}>
{
  error ? <h3>Error</h3> : <Table size="md" columns={columns} dataSource={dataWithSl} loading={isLoading}  />
}
      
    </div>
  );
};

export default CustomerList;
