/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "antd";
import styles from "./styles.module.css";
import Meta from "antd/es/card/Meta";

const COMMON_IMAGE =
  "https://img.freepik.com/premium-photo/beautiful-landscape-based-3d-rendering-illustration_771975-25.jpg";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>ABLAZED VERSE</h1>
      </div>

      <div className={styles.image_container}>
        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src={COMMON_IMAGE} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src={COMMON_IMAGE} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src={COMMON_IMAGE} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src={COMMON_IMAGE} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src={COMMON_IMAGE} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src={COMMON_IMAGE} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src={COMMON_IMAGE} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src={COMMON_IMAGE} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
