import React from "react";
import { useState } from "react";
import styles from "./DropDown.module.css";

type MenuData = {
  tagId: string;
  listName: string;
  description: string;
};

const DropDownMenu: React.FC<{ startTitle: string; data: MenuData[] }> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  const togglingHandler = () => setIsOpen(!isOpen);
  const selectOpitonHandler = (el: string) => {
    setIsOpen(false);
    setSelectedOption(el);
    console.log("kilk");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header} onClick={togglingHandler}>
          {selectedOption || [props.startTitle]}
          <img src="/images/arrow_down.png" alt="arrow"></img>
        </div>
        {isOpen && (
          <div className={styles.list_container}>
            {props.data.length > 0 && (
              <ul>
                {props.data?.map((el) => (
                  <li
                    onClick={() => {
                      selectOpitonHandler(el.listName);
                    }}
                    key={el.listName}
                  >
                    {el.listName}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className={styles.description}>
        {selectedOption &&
          props.data.find((el) => el.listName === selectedOption)?.description}
      </div>
    </>
  );
};
export default DropDownMenu;
