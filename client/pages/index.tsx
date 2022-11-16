import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import MainLayout from "../src/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>KVP.media</title>
      </Head>
      <MainLayout>
        <Image src="http://localhost:8000/uploads/default/9672.jpg" alt="" width="1000" height="1000" />
      </MainLayout>
    </>
  );
}
