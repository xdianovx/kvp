import React, { useEffect } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import TextVariantTune from "@editorjs/text-variant-tune";
import AttachesTool from "@editorjs/attaches";
import ImageTool from "@editorjs/image";
import Header from "@editorjs/header";

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
        quote: Quote,
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
            endpoint: "http://localhost:8000/api/v1/upload",
          },
        },
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
        },
        textVariant: TextVariantTune,
        image: {
          class: ImageTool,
          config: {
            field: "file",
            endpoints: {
              byFile: `http://localhost:8000/api/v1/upload`, // Your backend file uploader endpoint
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
