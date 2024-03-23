// import React from "react";
// import { useState, useEffect } from "react";
// import _debounce from "lodash/debounce";
// import styles from "./BottomView.module.css";
// import { useRouter } from "next/router";
// import IconButton from "../common/buttons/icon_btn/IconBtn";
// import { MOVIE_OUR_FAVOURITES, ABOUT, FUNNY_FACTS } from "@/routes";
// import isMobile from "is-mobile";

// //TODO : After deploy on netlify, problem with correctly read style for default desktop style.

// type BottomBarButton = {
//   src: string;
//   alt: string;
//   path: string;
// };

// const buttonData: BottomBarButton[] = [
//   { src: "/images/home.png", alt: "home", path: "" },
//   {
//     src: "/images/favorite.png",
//     alt: "our favourite",
//     path: MOVIE_OUR_FAVOURITES,
//   },
//   { src: "/images/funfact.png", alt: "funny facts", path: FUNNY_FACTS },
//   { src: "/images/person.png", alt: "about", path: ABOUT },
// ];

// const BottomBar: React.FC = () => {
//   const router = useRouter();
//   const navigateHandler = (path: string) => {
//     router.push(`/${path}`);
//   };

//   const [isScrolling, setIsScrolling] = useState(false);

//   useEffect(() => {
//     const checkScroll = _debounce(() => {
//       if (window.scrollY >= window.innerHeight * 1.5) {
//         setIsScrolling(true);
//       } else {
//         setIsScrolling(false);
//       }
//     }, 300);

//     window.addEventListener("scroll", checkScroll);

//     return () => {
//       window.removeEventListener("scroll", checkScroll);
//     };
//   }, []);

//   return (
//     <div className={isScrolling ? styles.bottom_bar_fixed : styles.bottom_bar}>
//       {buttonData.map((button, index) => (
//         <IconButton
//           key={index}
//           onNavigate={navigateHandler}
//           src={button.src}
//           alt={button.alt}
//           path={button.path}
//         />
//       ))}
//     </div>
//   );
// };

// export default BottomBar;
import React from "react";
import { useState, useEffect } from "react";
import _debounce from "lodash/debounce";
import styles from "./BottomView.module.css";
import { useRouter } from "next/router";
import IconButton from "../common/buttons/icon_btn/IconBtn";
import { MOVIE_OUR_FAVOURITES, ABOUT, FUNNY_FACTS } from "@/routes";
import { isMobile } from "react-device-detect";

//TODO : After deploy on netlify, problem with correctly read style for default desktop style.

type BottomBarButton = {
  src: string;
  alt: string;
  path: string;
};

const buttonData: BottomBarButton[] = [
  { src: "/images/home.png", alt: "home", path: "" },
  {
    src: "/images/favorite.png",
    alt: "our favourite",
    path: MOVIE_OUR_FAVOURITES,
  },
  { src: "/images/funfact.png", alt: "funny facts", path: FUNNY_FACTS },
  { src: "/images/person.png", alt: "about", path: ABOUT },
];

const BottomBar: React.FC = () => {
  const router = useRouter();
  const navigateHandler = (path: string) => {
    router.push(`/${path}`);
  };

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const checkScroll = _debounce(() => {
      if (window.scrollY >= window.innerHeight * 1.5) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }, 300);

    if (isMobile) {
      window.addEventListener("scroll", checkScroll);

      return () => {
        window.removeEventListener("scroll", checkScroll);
      };
    }
  }, []);

  return (
    <div className={isScrolling ? styles.bottom_bar_fixed : styles.bottom_bar}>
      {buttonData.map((button, index) => (
        <IconButton
          key={index}
          onNavigate={navigateHandler}
          src={button.src}
          alt={button.alt}
          path={button.path}
        />
      ))}
    </div>
  );
};

export default BottomBar;
