import React, { FC } from "react";

import { IconButton } from "@mui/material";
import { Add, Edit, DeleteOutline } from "@mui/icons-material";
import TreeItem from "@mui/lab/TreeItem";

import { IEumkFolder, IEumkSection } from "domains/eumks/shared/types";

interface IProps {
  className?: string;
  eumkSection: IEumkSection;
  onAddItem: (eumkItem: IEumkFolder) => void;
  onEditName: (eumkItem: IEumkSection) => void;
}

const Section: FC<IProps> = ({ eumkSection, onAddItem, onEditName }) => {
  return (
    <TreeItem
      key={ eumkSection.name }
      nodeId={ eumkSection.name }
      label={ (
        <>
          <span>{eumkSection.name}</span>
          {"items" in eumkSection && (
            <IconButton onClick={ () => onAddItem(eumkSection as IEumkFolder) }>
              <Add/>
            </IconButton>
          )}
          {!eumkSection.required && (
            <>
              <IconButton><Edit/></IconButton>
              <IconButton><DeleteOutline/></IconButton>
            </>
          )}
        </>
      ) }
    >
      {"items" in eumkSection && (
        (eumkSection as IEumkFolder).items.map(subItem => (
          < TreeItem
            key={ subItem.name }
            nodeId={ subItem.name }
            label={ (
              <>
                <span>{subItem.name}</span>
                {"items" in subItem && (
                  <IconButton onClick={ () => onAddItem(subItem as IEumkFolder) }>
                    <Add/>
                  </IconButton>
                )}
                {!subItem.required && (
                  <>
                    <IconButton onClick={ () => onEditName(subItem) }><Edit/></IconButton>
                    <IconButton><DeleteOutline/></IconButton>
                  </>
                )}
              </>
            ) }
          />
        ))
      )}
    </TreeItem>
  );
};

export default Section;
