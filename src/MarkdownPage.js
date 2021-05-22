/*
 * Description  : 编辑页面
 * Author       : Saraku.
 * Date         : 2021-05-22 12:30:15
 * LastEditors  : Saraku.
 * LastEditTime : 2021-05-22 22:08:04
 */

import React from "react";
import styles from "./MarkdownPage.less";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

function MarkdownPage() {
  const mdParser = new MarkdownIt(/* Markdown-it options */);

  function handleEditorChange({ html, text }) {
    console.log("handleEditorChange", html, text);
  }

  return (
    <MdEditor
      style={{ height: "100%" }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
}

export default MarkdownPage;
