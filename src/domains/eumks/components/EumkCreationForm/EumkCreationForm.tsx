import React, { FC, useCallback, useState } from "react";

import { DropzoneArea } from "material-ui-dropzone";
import { Button, Drawer } from "@mui/material";
import { EditorState } from "draft-js";
import mammoth from "mammoth";

import RichTextEditor from "domains/eumks/components/RichTextEditor";

import "./EumkCreationForm.scss";


const EumkCreationForm: FC = () => {
  const [ editorState, setEditorState ] = useState(
    () => EditorState.createEmpty());
  const [ htmlFromFile, setHtmlFromFile ] = useState("");
  const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);

  const onFilesChange = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const arrayBuffer = await files[ 0 ].arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setHtmlFromFile(result.value);
    }
  }, []);

  const onPreviewClick = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  return (
    <div className="eumk-creation-form">
      <Button onClick={ onPreviewClick } className="preview-button" variant="contained">Предпросмотр</Button>
      <RichTextEditor editorState={ editorState } setEditorState={ setEditorState }/>
      <DropzoneArea dropzoneClass="dropzone" filesLimit={ 1 } onChange={ onFilesChange } />
      <Drawer
        anchor="right"
        open={ isDrawerOpen }
        onClose={ () => setIsDrawerOpen(false) }
      >
        <div className="preview-drawer" dangerouslySetInnerHTML={ { __html: htmlFromFile } } />
      </Drawer>
    </div>
  );
};

export default EumkCreationForm;
