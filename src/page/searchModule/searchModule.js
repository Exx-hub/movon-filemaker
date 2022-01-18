import React from "react";
import "./searchModule.css";

import { Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const tableSource = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "Travel",
    dataIndex: "travel",
    key: "travel",
    align: "center",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    align: "center",
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
    align: "center",
  },
  {
    title: "Contact No.",
    dataIndex: "contactNumber",
    key: "contactNumber",
    align: "center",
  },
  {
    title: "Ticket Reference",
    dataIndex: "ticketRef",
    key: "ticketRef",
    align: "center",
  },
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
    align: "center",
  },
  {
    title: "RS No.",
    dataIndex: "rsNumber",
    key: "rsNumber",
    align: "center",
  },
];

function SearchModule() {
  return (
    <div className="searchModule-container">
      <div>
        <Input
          className="search-input"
          placeholder="Search here"
          suffix={<SearchOutlined className="search-icon" />}
        />
      </div>
      <div className="table-container">
        <Table
          // loading={this.state.fetching}
          scroll={{ y: 700 }}
          rowKey="key"
          // pagination={{ position: ["bottomCenter"], pageSize: pageSize }}
          // pagination={false}
          columns={tableSource}
          // dataSource={dataSource}
          // to use pagination from ant D, default table pagination not ideal
        />
      </div>
    </div>
  );
}

export default SearchModule;
