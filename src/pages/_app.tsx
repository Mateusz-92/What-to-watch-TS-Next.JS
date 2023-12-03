import BottomBar from "@/components/bottom_bar/bottomBar";
import Logo from "@/components/common/headers/Logo";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // styles bellow are only dummy
  const ComponentWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        style={{
          height: "100vh",
          // width: "100vw",
          // paddingTop: "20px",
          // marginBottom: "220px ",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      <ComponentWrapper>
        {" "}
        <Logo></Logo>
        <Component {...pageProps} />
        <BottomBar></BottomBar>
      </ComponentWrapper>
    </>
  );
}
