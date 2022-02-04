import React from "react";
import { Modal, Button } from "antd";
import { UserProfile, logoutSuccess } from "../../utility";
import "./modal.css";

function LogOutModal(props) {
  const handleLogout = () => {
    UserProfile.clearData();
    logoutSuccess();
    props.history.push("/");
  };

  return (
    <Modal
      visible={props.visible}
      className="modal"
      onCancel={props.handleCancel}
      footer={[
        <Button
          key={"btn-1"}
          className="cancel-btn"
          onClick={props.handleCancel}
        >
          Cancel
        </Button>,
        <Button key={"btn-2"} className="ok-btn" onClick={handleLogout}>
          Ok
        </Button>,
      ]}
    >
      Are you sure you want to logout?
    </Modal>
  );
}

export default LogOutModal;
