import ComponentWrapper from "@/components/Layout/ComponentWrapper/ComponentWrapper";
import BottomBar from "@/components/bottom_bar/bottomBar";
import Logo from "@/components/common/headers/Logo";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ComponentWrapper>
        <Logo />
        <Component {...pageProps} />
        <BottomBar />
      </ComponentWrapper>
    </div>
  );
}
