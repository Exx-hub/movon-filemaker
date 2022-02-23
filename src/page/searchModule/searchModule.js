import React, { useEffect, useState } from "react";
import "./searchModule.css";

import { Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SearchAPI from "../../service/Search";

import moment from "moment-timezone";

const { Search } = Input;

const tableSource = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "Travel Date",
    dataIndex: "travelDate",
    key: "travelDate",
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
    title: "Contact No.",
    dataIndex: "contactNumber",
    key: "contactNumber",
    align: "center",
  },
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
    align: "center",
  },
  {
    title: "Trip ID",
    dataIndex: "tripId",
    key: "tripId",
    align: "center",
  },
  {
    title: "RS No.",
    dataIndex: "rsNumber",
    key: "rsNumber",
    align: "center",
  },
];

// const dataSource = [
//   {
//     name: "Alvin Acosta",
//     travelDate: "January 19, 2022",
//     from: "Cubao",
//     to: "Baguio",
//     contactNumber: "0916-4209977",
//     ticketRef: "BC12345",
//     ticketId: "T-13hiuefgfdg",
//     rsNumber: "123",
//     key: 0,
//   },
//   {
//     name: "Alvin Acosta",
//     travelDate: "January 19, 2022",
//     from: "Cubao",
//     to: "Baguio",
//     contactNumber: "0916-4209977",
//     ticketRef: "BC12345",
//     ticketId: "T-13hiuefgfdg",
//     rsNumber: "123",
//     key: 1,
//   },
//   {
//     name: "Alvin Acosta",
//     travelDate: "January 19, 2022",
//     from: "Cubao",
//     to: "Baguio",
//     contactNumber: "0916-4209977",
//     ticketRef: "BC12345",
//     ticketId: "T-13hiuefgfdg",
//     rsNumber: "123",
//     key: 2,
//   },
//   {
//     name: "Alvin Acosta",
//     travelDate: "January 19, 2022",
//     from: "Cubao",
//     to: "Baguio",
//     contactNumber: "0916-4209977",
//     ticketRef: "BC12345",
//     ticketId: "T-13hiuefgfdg",
//     rsNumber: "123",
//     key: 3,
//   },
// ];

function SearchModule() {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  const [records, setRecords] = useState(null);
  console.log("records:", records);

  useEffect(() => {
    getAllLatest();
  }, []);

  const getAllLatest = () => {
    SearchAPI.getAll()
      .then((e) => {
        const { data, success, errorCode } = e.data;
        parseData(data.list);
        // console.log(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const parseData = (dataResult) => {
    const records = dataResult.map((e, i) => {
      // console.log("record:", e);

      return {
        key: i,
        name: e.passengerInfo.fullName,
        travelDate: moment
          .tz(e.travelDate, "Asia/Manila")
          .format("MMM DD, YYYY hh:mm:ss A"),
        from: e.startStation,
        to: e.endStation,
        contactNumber: e.passengerInfo.phone.number,
        ticketId: e.ticketId,
        tripId: e.tripId,
        rsNumber: e.rsNo,
      };
    });

    setRecords(records);
  };

  const doSearch = (searchInput) => {
    if (searchInput) {
      SearchAPI.getTransactionById(searchInput)
        .then((e) => {
          const { data, success, errorCode } = e.data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="searchModule-container">
      <div className="search-div">
        <Input
          className="search-input"
          placeholder="Search by Ticket ID"
          suffix={
            <SearchOutlined
              className="search-icon"
              onClick={() => doSearch(searchInput)}
            />
          }
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onPressEnter={() => doSearch(searchInput)}
        />
      </div>
      <div className="table-container">
        <Table
          // loading={this.state.fetching}
          // scroll={{ y: 700 }}
          scroll={{ x: "max-content" }}
          rowKey="key"
          pagination={{ position: ["bottomCenter"] }}
          // pagination={false}
          columns={tableSource}
          dataSource={records}
          bordered
          // to use pagination from ant D, default table pagination not ideal
        />
      </div>
    </div>
  );
}

export default SearchModule;
