import React, { FC } from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./RichTextEditor.scss";

interface IProps {
    wrapperClassName?: string;
    editorState: EditorState;
    setEditorState: React.Dispatch<React.SetStateAction<EditorState>>
}

const RichTextEditor: FC<IProps> = ({ wrapperClassName, editorState, setEditorState }) => {
  return (
    <Editor
      wrapperClassName="rich-text-editor-wrapper"
      editorState={ editorState }
      toolbarClassName="rich-text-editor-toolbar"
      editorClassName="rich-text-editor"
      onEditorStateChange={ setEditorState }
    />
  );
};

export default RichTextEditor;
