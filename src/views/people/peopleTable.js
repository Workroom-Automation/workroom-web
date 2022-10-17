import React from "react";
import CustomButton from "../../components/button";
import "./style.css";
import UserAddIcon from "remixicon-react/UserAddLineIcon";
export default function PeopleTable({ 
  columns = [], data = [], showColumn = true, internalBorder=false}) {
  return (
    <div className="people-table">
      <table>
      { showColumn&& <thead>
          {columns.map((column, index) => {
            return <th key={index}>{column.title}</th>;
          })}
        </thead>}
        {data?.length <= 0 ? (
          <tr style={{height:"151px"}}>
            <td colSpan={5}>
              <UserAddIcon color="#DADADA" size="50px" />
              <br />
              No users added
            </td>
          </tr>
        ) : (
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  {columns.map((column, index) => {
                    return (
                      <td  style={{borderLeft:internalBorder?"1px solid #DADADA":'none'}} key={index}>
                        {column.customComponent
                          ? column.customComponent({
                              data: row[column.dataIndex],
                            })
                          : row[column.dataIndex]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}
