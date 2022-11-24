import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { isTemplateMiddle } from "typescript";
import { PostInfo } from "../../src/components";
import MainLayout from "../../src/layouts/MainLayout";
import { Tag, Title } from "../../src/ui";
import { PostApi } from "../../src/utils/api";
import s from "./styles.module.scss";

export default function SinglePost({ post }): JSX.Element {
  const tags = [
    { id: 1, title: "#Работа", slug: "work" },
    { id: 2, title: "#Маркетинг", slug: "marketing" },
    { id: 3, title: "#Наука", slug: "science" },
    { id: 4, title: "#Анализ", slug: "acaliz" },
  ];

  return (
    <>
      <Head>
        <title></title>
      </Head>

      <MainLayout>
        <div className="container-sm">
          <section className={s.tags}>
            {tags.map((item) => (
              <Tag key={item.id} title={item.title} slug={item.slug} />
            ))}
          </section>
          <Title tag="h1" className={s.pagetitle}>
            {post.title}
          </Title>

          <PostInfo
            avatar="asd"
            name="Юрий Сапожников"
            date="12.12.2022"
            commentsCount={23}
            views={1233}
          />

          {post.body.map((item) => (
            <div key={item.id}>{item.data?.text}</div>
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await PostApi.getAll();
  const paths = data.map((item: any) => {
    return {
      params: { slug: String(item.id) },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx: any) => {
  const slug = ctx.params.slug;
  const post = await PostApi.getPost(slug);
  return {
    props: {
      post,
    },
  };
};
