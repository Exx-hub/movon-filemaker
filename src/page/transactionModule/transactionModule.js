import React from "react";
import "./transactionModule.css";
import bus from "../../assets/images/bus.png";

import { Input, DatePicker, Image, Table } from "antd";

const { RangePicker } = DatePicker;

const tableSource = [
  {
    title: "Seat No.",
    dataIndex: "seatNumber",
    key: "seatNumber",
    align: "center",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "Mobile No.",
    dataIndex: "mobileNumber",
    key: "mobileNumber",
    align: "center",
  },
  {
    title: "Ticket Ref.",
    dataIndex: "ticketRef",
    key: "ticketRef",
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
];

function TransactionModule() {
  return (
    <div className="transactionModule-container">
      <div className="search-date-container">
        {/* RS INPUT  */}
        <Input placeholder="RS #" style={{ width: "20%" }} />
        {/* DATE RANGE PICKER  */}
        <RangePicker style={{ width: "20%" }} />
      </div>

      <div className="details-container">
        <div className="seatMap-container">
          <Image src={bus} alt="" className="bus-image" />
        </div>

        <div className="trip-details-container">
          <div className="trip-details">
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

            <div>
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

          <div className="dashed-line" />

          <div className="table-container">
            <Table columns={tableSource} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionModule;
