"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import dashboardData from "../../../public/dashboardData";
import { Modal } from "antd";

const COMMON_IMAGE =
  "https://img.freepik.com/premium-photo/beautiful-landscape-based-3d-rendering-illustration_771975-25.jpg";

const Dashboard = () => {
  const [details, setDetails] = useState(null);
  const handleOk = () => {
    setDetails(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>ABLAZED VERSE</h1>
      </div>

      <div className={styles.image_container}>
        {dashboardData.map((item) => (
          <div
            className={styles.pics}
            key={item?.image}
            onClick={() => setDetails(item)}
          >
            <img src={item?.image} alt="image" style={{ width: "100%" }} />
            <div className={styles.card_text}>{item?.desc}</div>
          </div>
        ))}
      </div>

      <Modal
        title="Your Memory"
        open={details}
        onCancel={handleOk}
        footer={null}
        width="50%"
        centered
      >
        <div>
          <img src={details?.image} alt="image" style={{ width: "100%" }} />
          <div>{details?.desc}</div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
