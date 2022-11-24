import { Head } from "next/document";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MainLayout from "../../src/layouts/MainLayout";
import { PostApi } from "../../src/utils/api";

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>KVP.media</title>
      </Head>
      <MainLayout>asd</MainLayout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await PostApi.getAll();
  return {
    props: {
      posts: posts,
    },
  };
}
