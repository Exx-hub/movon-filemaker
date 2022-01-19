import React, { useState } from "react";
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

const dataSource = [
  {
    name: "Alvin Acosta",
    travel: "N/A",
    date: "January 19, 2022",
    to: "Baguio",
    contactNumber: "0916-4209977",
    ticketRef: "BC12345",
    ticketId: "T-13hiuefgfdg",
    rsNumber: "123",
    key: 0,
  },
  {
    name: "Alvin Acosta",
    travel: "N/A",
    date: "January 19, 2022",
    to: "Baguio",
    contactNumber: "0916-4209977",
    ticketRef: "BC12345",
    ticketId: "T-13hiuefgfdg",
    rsNumber: "123",
    key: 1,
  },
  {
    name: "Alvin Acosta",
    travel: "N/A",
    date: "January 19, 2022",
    to: "Baguio",
    contactNumber: "0916-4209977",
    ticketRef: "BC12345",
    ticketId: "T-13hiuefgfdg",
    rsNumber: "123",
    key: 2,
  },
  {
    name: "Alvin Acosta",
    travel: "N/A",
    date: "January 19, 2022",
    to: "Baguio",
    contactNumber: "0916-4209977",
    ticketRef: "BC12345",
    ticketId: "T-13hiuefgfdg",
    rsNumber: "123",
    key: 3,
  },
];

function SearchModule() {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  return (
    <div className="searchModule-container">
      <div className="search-div">
        <Input
          className="search-input"
          placeholder="Search here"
          suffix={<SearchOutlined className="search-icon" />}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onPressEnter={() => alert(`SEARCH: ${searchInput}`)}
        />
      </div>
      <div className="table-container">
        <Table
          // loading={this.state.fetching}
          // scroll={{ y: 700 }}
          rowKey="key"
          pagination={{ position: ["bottomCenter"] }}
          // pagination={false}
          columns={tableSource}
          dataSource={dataSource}
          // to use pagination from ant D, default table pagination not ideal
        />
      </div>
    </div>
  );
}

export default SearchModule;
