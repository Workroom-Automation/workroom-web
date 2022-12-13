import Table from "react-bootstrap/Table";
import styles from "../../../styles/sheetTable.module.css";

export default function SheetTable(props) {
  let sheets = props.value.sheets;
  if (sheets.loading) {
    return "...loading";
  }
  return (
    <Table id={styles.table} hover responsive="md">
      <thead>
        <tr>
          <th>Sheet ID</th>
          <th>Sheet Name</th>
          <th>Linked Asset</th>
          <th>Sub-Asset</th>
          <th>Steps</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        {sheets.data?.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{item.external_code}</td>
              <td>{item.name}</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
