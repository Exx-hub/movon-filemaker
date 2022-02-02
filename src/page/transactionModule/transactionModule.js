import React from "react";
import "./transactionModule.css";
import { dataSource } from "./sampleData";

import { Input, DatePicker, Table, Dropdown, Button } from "antd";

import { ProfileOutlined, DownOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const tableSource = [
  {
    title: "RS No.",
    dataIndex: "rsNumber",
    key: "rsNumber",
    align: "center",
  },
  {
    title: "Travel Date",
    dataIndex: "travelDate",
    key: "travelDate",
    align: "center",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    align: "center",
  },
  {
    title: "Bus Type",
    dataIndex: "busType",
    key: "busType",
    align: "center",
  },
  {
    title: "Seat No.",
    dataIndex: "seatNumber",
    key: "seatNumber",
    align: "center",
  },
  {
    title: "Ticket No.",
    dataIndex: "ticketNumber",
    key: "ticketNumber",
    align: "center",
  },
  {
    title: "Passenger Name",
    dataIndex: "passengerName",
    key: "passengerName",
    align: "center",
  },
  {
    title: "Contact No.",
    dataIndex: "contactNumber",
    key: "contactNumber",
    align: "center",
  },
  {
    title: "From",
    dataIndex: "from",
    key: "from",
    align: "center",
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
    align: "center",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    align: "center",
  },
  {
    title: "Remarks",
    dataIndex: "remarks",
    key: "remarks",
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
  },
  {
    title: "BOOKED BY:",
    // className: "hello",
    // dataIndex: "bookedby",
    // key: "bookedby",
    // align: "center",
    children: [
      {
        title: "User ID",
        dataIndex: "userId",
        key: "userId",
        align: "center",
      },
      {
        title: "Timestamp",
        dataIndex: "timestamp",
        key: "timestamp",
        align: "center",
      },
      {
        title: "Device ID",
        dataIndex: "deviceId",
        key: "deviceId",
        align: "center",
      },
    ],
  },
];

function TransactionModule() {
  const handleDownload = () => {
    // add download xls api here with passed filters
    alert("download xls clicked");
  };

  const menu = (
    <div className="dropdown-menu">
      <div onClick={handleDownload}>
        <ProfileOutlined /> Download XLS
      </div>
    </div>
  );
  return (
    <div className="transactionModule-container">
      <div className="search-date-container">
        <Input placeholder="RS #" style={{ width: "20%" }} />

        <div className="date-dropdown-div">
          <RangePicker style={{ width: "100%" }} />

          <Dropdown overlay={menu}>
            <Button className="dropdown-item-btn">
              <DownOutlined /> Download
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="trip-details-container">
        <div className="trip-details">
          <div className="trip-manifest-title">Trip Manifest</div>
          <div className="title-values-div">
            <div style={{ marginRight: "50px" }}>
              <div>
                <span className="title">Travel Date: </span>
                <span className="value">January 22, 2022</span>
              </div>
              <div>
                <span className="title">Driver: </span>
                <span className="value">Alvin Acosta</span>
              </div>
            </div>

            <div style={{ marginRight: "50px" }}>
              <div>
                <span className="title">From: </span>
                <span className="value">Edsa, Cubao</span>
              </div>
              <div>
                <span className="title">To: </span>
                <span className="value">Baguio City</span>
              </div>
            </div>

            <div style={{ marginRight: "20px" }}>
              <div>
                <span className="title"> Bus No.: </span>
                <span className="value">12345</span>
              </div>
              <div>
                <span className="title">Plate No.: </span>
                <span className="value">SLP 1990</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashed-line" />

        <div className="tableContainer">
          <Table
            columns={tableSource}
            dataSource={dataSource}
            pagination={false}
            bordered
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </div>
  );
}

export default TransactionModule;
