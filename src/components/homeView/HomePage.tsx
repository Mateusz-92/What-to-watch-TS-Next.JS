import React from "react";
import styles from "./HomePage.module.css";
import { useRouter } from "next/router";
import Camera from "../common/camera/CameraView";

const HomeView: React.FC = () => {
  const router = useRouter();
  const navigateHandler = () => {
    router.push("/start");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          Lubisz stare filmy? <br />
          Podpowiemy Ci który obejrzeć!
        </h2>
        <button onClick={navigateHandler}>Rozpocznij wyszukiwanie </button>
      </div>
      <Camera />
    </div>
  );
};
export default HomeView;
