import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Body from "./components/body/body";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Body />
    </>
  );
}
