import React from "react";
import styles from "./styles.module.css";
import dashboardData from "../../../public/dashboardData";

const COMMON_IMAGE =
  "https://img.freepik.com/premium-photo/beautiful-landscape-based-3d-rendering-illustration_771975-25.jpg";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>ABLAZED VERSE</h1>
      </div>

      <div className={styles.image_container}>
        {dashboardData.map((item) => (
          <div className={styles.pics} key={item?.image}>
            <img src={item?.image} alt="image" style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
