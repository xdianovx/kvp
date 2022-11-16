import Head from "next/head";
import MainLayout from "../src/layouts/MainLayout";
import dynamic from "next/dynamic";
import { useState } from "react";
import { PostApi } from "../src/utils/api/index";

const Editor = dynamic(() => import("../src/components/Editor/Editor").then((m) => m.Editor), { ssr: false });

export default function makepost() {
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState("");

  const onAddPost = async () => {
    const post = await PostApi.create({ title, body: blocks });
    console.log(post);
  };
  return (
    <div>
      <Head>
        <title>Создать пост</title>
      </Head>

      <MainLayout>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок" />
        <Editor onChange={(arr: any) => setBlocks(arr)} />
        <button onClick={onAddPost}>Опубликовать</button>
      </MainLayout>
    </div>
  );
}
