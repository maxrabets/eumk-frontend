import React, { FC } from "react";

import { Box } from "@mui/material";

import { EumkCreationForm, SectionsTree } from "domains/eumks/components";

import "./CreateEumkPage.scss";

const CreateEumkPage: FC = () => {
  return (
    <Box className="create-eumk-page">
      <SectionsTree className="eumk-pages-tree"/>
      <EumkCreationForm/>
    </Box>
  );
};

export default CreateEumkPage;
