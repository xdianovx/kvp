import React, { useEffect } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import List from "@editorjs/list";
import AttachesTool from "@editorjs/attaches";
import ImageTool from "@editorjs/image";

interface EditorProps {
  onChange: (blocks: OutputData) => void;
}

export const Editor: React.FC<EditorProps> = ({ onChange }) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "Статья начинается тут",
      async onChange() {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
      tools: {
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        attaches: {
          class: AttachesTool,
          config: {
            endpoint: "../static",
          },
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: `"http://localhost:8000/client"`, // Your backend file uploader endpoint
              byUrl: "http://localhost:8000/client", // Your endpoint that provides uploading by Url
            },
          },
        },
      },
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.log("ERROR editor cleanup", e));
    };
  }, []);
  return <div id="editor" />;
};
