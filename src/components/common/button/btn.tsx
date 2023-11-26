import React from "react";
import styles from "./btn.module.css";

const Button: React.FC<{
  onNavigate: (path: string) => void;
  path: string;
  src: string;
  alt: string;
}> = (props) => {
  return (
    <div onClick={() => props.onNavigate(props.path)} className={styles.btn}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
export default Button;
