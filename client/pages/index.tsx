import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MainLayout from "../src/layouts/MainLayout";
import { PostApi } from "../src/utils/api";

export default function Home({ posts }):any {
  return (
    <>
      <Head>
        <title>KVP.media</title>
      </Head>
      <MainLayout>
        <section className="posts">
          <div className="container">
            {/* <div className="posts__wrap">
              {posts.map((item: any) => (
                <div className="post">
                  {item.title}
                  <Link href={`post/${item.id}`}>link</Link>
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export async function getStaticProps() {
  // const posts = await PostApi.getAll();
  return {
    props: {
      posts: [1,2,4],
    },
  };
}
