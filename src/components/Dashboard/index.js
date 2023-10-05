"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import dashboardData from "../../../public/dashboardData";
import { Button, Modal } from "antd";
import CreateJournalModal from "../CreateJournalModal";

const Dashboard = () => {
  const [details, setDetails] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  const handleOk = () => {
    setDetails(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>ABLAZED VERSE</h1>
      </div>

      <Button type="primary" onClick={() => setShowCreate(true)}>
        Create Journal
      </Button>
      <CreateJournalModal
        showCreate={showCreate}
        setShowCreate={setShowCreate}
      />

      <div>
        {/* upper fading  */}
        <div className={styles.upper_fader} />

        <div
          className={styles.image_container}
          style={{ position: "relative" }}
        >
          <div className={styles.video_container}>
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              className={styles.video_styles}
            >
              <source src="/startsMoving.mp4" type="video/mp4" />
            </video>
          </div>

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

        {/* lower fading  */}
        <div className={styles.lower_fader} />
      </div>

      <Modal
        title="Your Memory"
        open={details}
        onCancel={handleOk}
        footer={null}
        width="50%"
        centered
        maskClosable={false}
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
