import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Logo from "@/components/common/header/logo";
import Button from "@/components/common/button/btn";
import { useRouter } from "next/router";
import BottomBar from "@/components/bottom_bar/bottomBar";
import Camera from "@/components/common/camera/camera";
import HomeView from "@/components/homeView/homeView";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomeView />
    </>
  );
}
