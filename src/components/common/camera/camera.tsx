import React from "react";
import styles from "./camera.module.css";
// import "./animation.js";

const Camera: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.camera_wrapper}>
        <img className={styles.camera} src="/images/camera2.png" alt="camera" />
        <img className={styles.s_rol} src="/images/s_rol.png" alt="scroll" />
        <img className={styles.b_rol} src="/images/b_rol.png" alt="scroll" />
      </div>
      <div className={styles.light}>
        <img src="/images/light.png"></img>
      </div>
    </div>
  );
};
export default Camera;
