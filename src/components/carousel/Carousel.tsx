import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { useRouter } from "next/router";

export type Item = {
  name: string;
  redirect: string;
  image: string;
};

type CarouselProps = {
  items: Item[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [index, setIndex] = useState<number>(0);
  const nextItemHandler = () => {
    setIndex((index) => (index + 1) % items.length);
  };

  const previousItemHandler = () => {
    setIndex((index) => (index - 1 + items.length) % items.length);
  };

  const router = useRouter();

  const navigateHandler = (path: string) => {
    router.push(`/${path}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          <p> Według jakiej</p>
          <p> kategori</p>
          <p> szukasz filmu ?</p>{" "}
        </h2>
        <div>
          <img src="/images/question_mark.png" alt="question mark"></img>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.type}>
          <button
            className={styles.prev_btn}
            onClick={previousItemHandler}
          ></button>

          <div className={styles.test}>
            <div className={styles.img_wrapper}>
              <img
                src={items[index].image}
                alt={items[index].name}
                onClick={() => navigateHandler(items[index].redirect)}
              ></img>
            </div>
            <span>{items[index].name}</span>
          </div>
          <button
            className={styles.next_btn}
            onClick={nextItemHandler}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
