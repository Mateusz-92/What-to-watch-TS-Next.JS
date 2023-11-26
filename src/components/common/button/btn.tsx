import React from "react";
import styles from "./btn.module.css";

const Button: React.FC<{
  onNavigate: () => void;
  src: string;
  alt: string;
}> = (props) => {
  return (
    <div onClick={props.onNavigate} className={styles.btn}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
export default Button;
