import classnames from "classnames";
import { isFunction } from "lodash";
import { Spinner } from "../spinner";
import { Text } from "../text";
import { Columns, DataSource } from "./table.schema";
import { TableStyled } from "./table.styled";

interface Props {
  size?: "sm" | "md" | "lg" | "xlg";
  width?: string;
  columns: Columns[];
  dataSource?: DataSource[];
  hover?: boolean;
  transparent?: boolean;
  loading?: boolean;
  scroll?: "scroll" | "unset";
  onRow?: (value: DataSource) => void;
}

const Table = ({
  size,
  width,
  columns = [],
  dataSource = [],
  hover = true,
  transparent,
  loading = false,
  scroll = "scroll",
  onRow,
}: Props) => {
  return (
    <TableStyled
      style={{ overflowX: loading ? "hidden" : undefined }}
      className={`table_${scroll}`}
    >
      <TableStyled.Table width={width} className={`table_size_${size}`}>
        <TableStyled.Head $transparent={transparent}>
          <TableStyled.TR>
            {columns.map((column) => (
              <TableStyled.TH key={column._id} $align={column.align} width={column.width}>
                <Text size="xs" fontWeight="semiBold" color="gray" textAlign={column.align}>
                  {column.title}
                </Text>
              </TableStyled.TH>
            ))}
          </TableStyled.TR>
        </TableStyled.Head>
        <TableStyled.Body>
          {loading ? (
            <TableStyled.TR>
              <TableStyled.TD colSpan={columns.length} style={{height:"250px",width:"100%"}}>
                <Spinner />
              </TableStyled.TD>
            </TableStyled.TR>
          ) : (
            dataSource.map((data) => (
              <TableStyled.TR
                key={data._id}
                className={classnames({ cursor_pointer: isFunction(onRow) })}
                $hover={hover}
                onClick={() => isFunction(onRow) && onRow(data)}
              >
                {columns.map((column) => (
                  <TableStyled.TD key={column._id} $align={column.align} width={column.width}>
                    {column.view ? (
                      column.view(data)
                    ) : (
                      <Text size="xs" fontWeight="regular" color="gray">
                        {data[column.dataIndex] as React.ReactNode} 
                      </Text>
                    )}
                  </TableStyled.TD>
                ))}
              </TableStyled.TR>
            ))
          )}
        </TableStyled.Body>
      </TableStyled.Table>
    </TableStyled>
  );
};
export default Table;
