import React, { FC } from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./RichTextEditor.scss";

interface IProps {
    wrapperClassName?: string;
}

const RichTextEditor: FC<IProps> = ({ wrapperClassName }) => {
  const [ editorState, setEditorState ] = React.useState(
    () => EditorState.createEmpty(),
  );

  return (
    <Editor
      wrapperClassName="rich-text-editor"
      editorState={ editorState }
      toolbarClassName="rich-text-editor"
      onEditorStateChange={ setEditorState }
    />
  );
};

export default RichTextEditor;
