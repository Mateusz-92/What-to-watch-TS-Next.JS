import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Logo from "@/components/common/header/logo";
import Button from "@/components/common/button/btn";
import { useRouter } from "next/router";
import BottomBar from "@/components/bottom_bar/bottomBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Logo></Logo>
      <div>This is main page</div>
      <BottomBar />
      {/* <Button onNavigate={handler} src="images/home.png" alt="sss"></Button> */}
    </>
  );
}
