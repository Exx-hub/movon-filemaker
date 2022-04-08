import React, { useState } from "react";
import "./transactionModule.css";
// import { dataSource } from "./sampleData";

import TransactionAPI from "../../service/Transaction";

import { Input, DatePicker, Table, Dropdown, Button } from "antd";
import moment from "moment-timezone";

import {
  ProfileOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { noData } from "../../utility";

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
  // {
  //   title: "Time",
  //   dataIndex: "time",
  //   key: "time",
  //   align: "center",
  // },
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
  const [rsInput, setRsInput] = useState("");
  // console.log(rsInput);
  const [records, setRecords] = useState(null);
  // console.log(records[0]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [titleValues, setTitleValues] = useState(null);
  console.log(titleValues);

  const handleDownload = () => {
    // add download xls api here with passed filters
    alert("download xls clicked");
  };

  const [statusVisible, setStatusVisible] = useState(false);
  const [statusArray, setStatusArray] = useState([]);
  console.log(statusArray);

  // const handleStatusFilter = (status) => {
  //   switch (status) {
  //     case "Booked":
  //       if (!statusArray.includes(status)) {
  //         setStatusArray([...statusArray, status]);
  //       } else {
  //         filtered = statusArray.filter((item) => item !== status);
  //         setStatusArray(filtered);
  //       }
  //   }
  // };

  const toggleStatusArray = (status) => {
    let filtered;

    // const obj = {
    //   Pending: 0,
    //   Booked: 1,
    //   Cancelled: 2,
    // };
    // try this too!

    if (!statusArray.includes(status)) {
      setStatusArray([...statusArray, status]);
    } else {
      filtered = statusArray.filter((item) => item !== status);
      setStatusArray(filtered);
    }
  };

  const handleVisibleChange = (flag) => {
    setStatusVisible(flag);
  };

  const searchByRsNo = () => {
    TransactionAPI.getTransactionByRsNo(rsInput).then((e) => {
      const { data, success, errorCode } = e.data;

      // console.log(e);

      if (errorCode || !success) {
        console.log("no data");
        noData();
        setTitleValues(null);
        setRecords(null);
      }

      if (success) {
        console.log("there is data");
        parseData(data.list);
      }
    });
  };

  const parseData = (dataResult) => {
    const records = dataResult.map((e, i) => {
      // console.log("record:", e);

      return {
        rsNumber: e.fieldData.rsNo,
        travelDate: moment
          .tz(e.fieldData.travelDate, "Asia/Manila")
          .format("MMM DD, YYYY hh:mm:ss A"),
        busType: e.fieldData.busType,
        seatNumber: e.fieldData.seatNo,
        ticketNumber: e.fieldData.ticketNo,
        passengerName: e.fieldData.nameOfPassenger,
        contactNumber: e.fieldData.contactNo,
        from: e.fieldData.from,
        to: e.fieldData.to,
        amount: e.fieldData.amount,
        remarks: e.fieldData.remarks,
        status: e.fieldData.status,
        userId: e.fieldData.modificationLog_userID,
        timestamp: e.fieldData.modificationLog_timestamp,
        deviceId: e.fieldData.modificationLog_deviceID,
        key: e.recordId,
      };
    });

    setRecords(records);
    setTitleValues(records.find((e) => e.from));
  };

  const downloadMenu = (
    <div className="dropdown-menu center">
      <div onClick={handleDownload}>
        <ProfileOutlined /> Download XLS
      </div>
    </div>
  );

  const statusMenu = (
    <div className="dropdown-menu">
      <div>
        <input
          type="checkbox"
          name="Pending"
          onChange={(e) => toggleStatusArray(e.target.name)}
          style={{ marginLeft: ".5em", marginRight: ".5em" }}
        />
        Pending
      </div>
      <div>
        <input
          type="checkbox"
          name="Booked"
          onChange={(e) => toggleStatusArray(e.target.name)}
          style={{ marginLeft: ".5em", marginRight: ".5em" }}
        />
        Booked
      </div>
      <div>
        <input
          type="checkbox"
          name="Cancelled"
          onChange={(e) => toggleStatusArray(e.target.name)}
          style={{ marginLeft: ".5em", marginRight: ".5em" }}
        />
        Cancelled
      </div>
    </div>
  );
  return (
    <div className="transactionModule-container">
      <div className="search-date-container">
        <div className="input-date-div">
          <Input
            placeholder="Enter RS #"
            style={{ width: "20%" }}
            value={rsInput}
            onChange={(e) => setRsInput(e.target.value)}
            onPressEnter={searchByRsNo}
            suffix={
              <SearchOutlined
                style={{ cursor: "pointer" }}
                onClick={searchByRsNo}
              />
            }
          />

          <RangePicker style={{ width: "25%" }} />
        </div>

        <div className="date-dropdown-div">
          <Dropdown
            overlay={statusMenu}
            onVisibleChange={handleVisibleChange}
            visible={statusVisible}
          >
            <Button className="status-dropdown">
              Status <DownOutlined />
            </Button>
          </Dropdown>

          <Dropdown overlay={downloadMenu}>
            <Button className="download-dropdown">
              <DownOutlined /> Download
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="trip-details-container">
        <div className="trip-details">
          <div className="trip-manifest-title">Trip Manifest</div>
          <div className="title-values-div">
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "20px" }}>
                <span className="title">Travel Date: </span>
                <span className="value">
                  {titleValues ? titleValues.travelDate : `---`}
                </span>
              </div>
              <div style={{ marginRight: "20px" }}>
                <span className="title">From: </span>
                <span className="value">
                  {titleValues ? titleValues.from : `---`}
                </span>
              </div>
              <div style={{ marginRight: "20px" }}>
                <span className="title">To: </span>
                <span className="value">
                  {titleValues ? titleValues.to : `---`}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashed-line" />

        <div className="tableContainer">
          <Table
            columns={tableSource}
            dataSource={records}
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
