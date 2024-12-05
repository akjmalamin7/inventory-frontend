import DeleteIcon from "@/assets/icons/deleteIcon";
import EditIcon from "@/assets/icons/editIcon";
import { useSuppliersQuery } from "@/redux/features/supplier/supplierApi";
import { Button } from "@/shared/ui/button";
import Table from "@/shared/ui/table";
import { Columns } from "@/shared/ui/table/table.schema";
import moment from "moment";
import style from "./supplierList.module.scss";
interface SupplierSchema {
  _id: string;
  userEmail?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  createdAt?: string;
  action?: React.ReactNode;
}
const columns: Columns[] = [
  { _id: "sl", title: "SL", dataIndex: "sl" },
  { _id: "name", title: "Name", dataIndex: "name" },
  { _id: "email", title: "Email", dataIndex: "email" },
  { _id: "phone", title: "Phone", dataIndex: "phone" },
  { _id: "userEmail", title: "User email", dataIndex: "userEmail" },
  { _id: "address", title: "Address", dataIndex: "address" },
  { _id: "createdAt", title: "CreatedAt", dataIndex: "createdAt", width: 150 },
  { _id: "action", title: "Action", dataIndex: "action", view: () => <ActionButtons /> },
];
const ActionButtons = () => {
 
  return (
    <div className={style.actions_buttons}>
      <Button variant="text">
        <EditIcon />
      </Button>
      <Button variant="text">
        <DeleteIcon />
      </Button>
    </div>
  );
};

const SupplierList = () => {
  const {data, error, isLoading} = useSuppliersQuery({
    pageNo:1,
    perPage:10,
    searchKey:0
  })
  const dataWithSl = data?.rows?.map((supplier: SupplierSchema, index: number) => ({
    ...supplier,
    createdAt: moment(supplier.createdAt).format("MMM DD, YYYY"),
    sl: index + 1,
  }));
  return (
    <div className={style.wrapper}>
{
  error ?(<h3>Error</h3>):(<Table size="md" columns={columns} dataSource={dataWithSl} loading={isLoading} />)
}
    </div>
  )
}

export default SupplierList