import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./DropDown.module.css";
import { ListData } from "@/pages/api/api";

const DropDownMenu: React.FC<{
  startTitle: string;
  data?: ListData[];
  onSelectTag: (tag: string) => void;
  fetchList?: () => Promise<ListData[]>;
}> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>();
  const [list, setList] = useState<ListData[]>([]);
  const hasFetchedData = useRef(false);

  const togglingHandler = () => setIsOpen(!isOpen);

  const selectOptionHandler = (el: string) => {
    setIsOpen(false);
    setSelectedOption(el);
    props.onSelectTag(el);
  };

  useEffect(() => {
    if (props.fetchList) {
      if (!hasFetchedData.current) {
        props.fetchList();
        hasFetchedData.current = true;

        props.fetchList().then((data) => {
          setList(data);
          console.log("useEffect");
        });
      }
    }
  }, []);
  return (
    <>
      {list && (
        <div className={styles.container}>
          <div className={styles.header} onClick={togglingHandler}>
            {(selectedOption &&
              (list.find((el) => el.listName === selectedOption)?.listName ||
                props.data?.find((el) => el.listName === selectedOption)
                  ?.listName)) ||
              props.startTitle}
            <img src="/images/arrow_down.png" alt="arrow" />
          </div>

          {isOpen && (
            <div className={styles.list_container}>
              {(list.length > 0 || (props.data && props.data.length > 0)) && (
                <ul>
                  {(list && list.length > 0 ? list : props.data)?.map((el) => (
                    <li
                      onClick={() => {
                        selectOptionHandler(el.listName);
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
      )}
      <div className={styles.description}>
        {selectedOption &&
          (list.find((el) => el.listName === selectedOption)?.description ||
            props.data?.find((el) => el.listName === selectedOption)
              ?.description)}
      </div>
    </>
  );
};
export default DropDownMenu;
