import React, { FC, useCallback, useState } from "react";

import { Box, IconButton } from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import { Add, ChevronRight, Edit, ExpandMore, Remove } from "@mui/icons-material";
import TreeItem from "@mui/lab/TreeItem";
import cloneDeep from "lodash/cloneDeep";

import { RichTextEditor, SetNameModal } from "domains/eumks";

import "./CreateEumkPage.scss";

interface IEumkItem {
  name: string;
  required?: boolean;
  parent?: IEumkFolder;
}

interface IEumkFolder extends IEumkItem {
    items: IEumkItem[];
}

const defaultEumkItems = [
  {
    name: "Титульный лист",
    required: true,
  },
  {
    name: "Содержание",
    required: true,
  },
  {
    name: "Лекции",
    items: [],
    required: true,
  },
  {
    name: "Лабораторные работы",
    items: [],
    required: true,
  },
  {
    name: "Контроль знаний",
    items: [],
    required: true,
  },
  {
    name: "Программа по дисциплине",
    required: true,
  },
  {
    name: "Список литературы",
    required: true,
  },
];

const CreateEumkPage: FC = () => {
  const [ eumkItems, setEumkItems ] = useState<IEumkItem[]>(defaultEumkItems);
  const [ isSetNameModalOpen, setIsSetNameModalOpen ] = useState(false);
  const [ currentEumkItem, setCurrentEumkItem ] = useState<null | IEumkItem>(null);

  const onAddItem = useCallback((eumkItem: IEumkFolder) => {
    const newEumkItem = {
      name: "",
      required: false,
      parent: eumkItem,
    };
    setCurrentEumkItem(newEumkItem);
    const newParentItem = cloneDeep(eumkItem);
    newParentItem.items = newParentItem.items.concat(newEumkItem);
    let newEumkItems = eumkItems.slice();
    newEumkItems.splice(eumkItems.indexOf(eumkItem), 1, newParentItem);
    newEumkItems = newEumkItems.concat(newEumkItem);
    setEumkItems(newEumkItems);
    setIsSetNameModalOpen(true);
  }, [ eumkItems ]);

  const onCloseSetNameModal = useCallback(() => {
    setIsSetNameModalOpen(false);
  }, []);

  const onSetName = useCallback((name: string) => {
    if (currentEumkItem) {
      const currentIndex = eumkItems.findIndex(item => item.name === currentEumkItem.name);
      const newEumkItems = eumkItems.slice();
      newEumkItems[ currentIndex ].name = name;
      setEumkItems(newEumkItems);
    }
    setIsSetNameModalOpen(false);
  }, [ currentEumkItem, eumkItems ]);

  return (
    <Box className="create-eumk-page">
      <TreeView
        className="eumk-pages-tree"
        defaultCollapseIcon={ <ChevronRight/> }
        defaultExpandIcon={ <ExpandMore/> }
      >
        {eumkItems.map(eumkItem => {
          if (!eumkItem.parent) {
            return (
              <TreeItem
                key={ eumkItem.name }
                nodeId={ eumkItem.name }
                label={ (
                  <>
                    <span>{eumkItem.name}</span>
                    {"items" in eumkItem && (
                      <IconButton onClick={ () => onAddItem(eumkItem as IEumkFolder) }>
                        <Add/>
                      </IconButton>
                    )}
                    {!eumkItem.required && (
                      <>
                        <IconButton><Edit/></IconButton>
                        <IconButton><Remove/></IconButton>
                      </>
                    )}
                  </>
                ) }
              >
                {"items" in eumkItem && (
                  (eumkItem as IEumkFolder).items.map(subItem => (
                    < TreeItem
                      key={ subItem.name }
                      nodeId={ subItem.name }
                      label={ subItem.name }
                    />
                  ))
                )}
              </TreeItem>
            );
          }
        })}
      </TreeView>
      <RichTextEditor/>
      <SetNameModal
        initialName={ currentEumkItem?.name || "" }
        onSetName={ onSetName }
        onCancel={ onCloseSetNameModal }
        isOpen={ isSetNameModalOpen }
      />
    </Box>
  );
};

export default CreateEumkPage;
