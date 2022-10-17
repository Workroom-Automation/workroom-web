import React from "react";
import CustomAccordion from "../../components/accordion";
import PeopleTable from "./peopleTable";
import { UserCustomComponent } from "./tableComponents";
import EditIcon from "remixicon-react/PencilLineIcon";
import CustomButton from "../../components/button";
export default function Teams({
  data = [
    {
      teamName: "Supplier Quality Control Team",
      teamMembers: [
        {
          name: "Vip",
          des: "Junior",
          email: "qwqw1@gmail.com",
          roles: 2,
          role: "Admin",
        },
        {
          name: "Vip",
          des: "Junior",
          email: "qwqw1@gmail.com",
          roles: 9,
          role: "Member",
        },
        {
          name: "Vip",
          des: "Junior",
          email: "qwqw1@gmail.com",
          roles: 4,
          role: "Admin",
        },
      ],
    },
  ],
}) {
  return (
    <div>
      {data.map((team, key) => {
        return (
          <div key={key}>
            <CustomAccordion
              title={team.teamName}
              bodyComponent={() => (
                <div className="d-flex">
                  <div style={{ width: "97%", border: "1px solid #DADADA" }}>
                    <PeopleTable
                      showColumn={false}
                      internalBorder={true}
                      columns={[
                        {
                          title: "Supplier Name",
                          dataIndex: "name",
                          customComponent: ({ data }) => (
                            <UserCustomComponent name={data} />
                          ),
                        },
                        { title: "Designation (Optional)", dataIndex: "des" },
                        { title: "E-mail ID", dataIndex: "email" },
                        {
                          title: "Role",
                          dataIndex: "role",
                          customComponent: ({ data }) => {
                            return (
                              <CustomButton
                                title={data}
                                border={`1px solid ${data==="Admin"?"#009AFF":"#FF9E44"}`}
                                borderRadius="11px"
                                width="96px"
                                padding=" 7px"
                                fontWeight="400"
                              />
                            );
                          },
                        },
                      ]}
                      data={team.teamMembers}
                    />
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "3%" }}
                  >
                    <CustomButton icon={() => <EditIcon color="#7D7676" />} />
                  </div>
                </div>
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
