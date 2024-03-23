import React from "react";
import { useState } from "react";
import styles from "./DropDown.module.css";
import { ListData } from "@/api/api";

const DropDownMenu: React.FC<{
  startTitle: string;
  data?: ListData[];
  onSelectTag: (tag: string) => void;
  queryData?: ListData[];
}> = ({ startTitle, data, onSelectTag, queryData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  const togglingHandler = () => setIsOpen(!isOpen);

  const selectOptionHandler = (el: string) => {
    setIsOpen(false);
    setSelectedOption(el);
    onSelectTag(el);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header} onClick={togglingHandler}>
          {startTitle}

          <img src="/images/arrow_down.png" alt="arrow" />
        </div>

        {isOpen && (
          <div className={styles.list_container}>
            {(queryData || (data && data.length > 0)) && (
              <ul>
                {(queryData && queryData.length > 0 ? queryData : data)?.map(
                  (el) => (
                    <li
                      onClick={() => {
                        selectOptionHandler(el.listName);
                      }}
                      key={el.listName}
                    >
                      {el.listName}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className={styles.description}>
        {selectedOption &&
          (queryData?.find((el) => el.listName === selectedOption)
            ?.description ||
            data?.find((el) => el.listName === selectedOption)?.description)}
      </div>
    </>
  );
};
export default DropDownMenu;
