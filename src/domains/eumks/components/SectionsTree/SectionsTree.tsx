import React, { FC, useCallback, useState } from "react";

import { IconButton } from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import { Add, ChevronRight, Edit, ExpandMore, DeleteOutline } from "@mui/icons-material";
import TreeItem from "@mui/lab/TreeItem";
import cloneDeep from "lodash/cloneDeep";

import { SetNameModal } from "domains/eumks";
import { IEumkFolder, IEumkSection } from "domains/eumks/shared/types";

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

interface IProps {
    className?: string;
}

const SectionsTree: FC<IProps> = ({ className }) => {
  const [ eumkItems, setEumkItems ] = useState<IEumkSection[]>(defaultEumkItems);
  const [ isSetNameModalOpen, setIsSetNameModalOpen ] = useState(false);
  const [ currentEumkItem, setCurrentEumkItem ] = useState<null | IEumkSection>(null);

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

  const onEditName = useCallback((eumkItem: IEumkSection) => {
    // if (currentEumkItem) {
    //   const currentIndex = eumkItems.findIndex(item => item.name === currentEumkItem.name);
    //   const newEumkItems = eumkItems.slice();
    //   newEumkItems[ currentIndex ].name = name;
    //   setEumkItems(newEumkItems);
    // }
    // setIsSetNameModalOpen(false);
    setCurrentEumkItem(eumkItem);
    setIsSetNameModalOpen(true);
  }, [ currentEumkItem, eumkItems ]);

  return (
    <div className={ className }>
      <TreeView
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
                        <IconButton><DeleteOutline/></IconButton>
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
          }
        })}
      </TreeView>
      <SetNameModal
        initialName={ currentEumkItem?.name || "" }
        onSetName={ onSetName }
        onCancel={ onCloseSetNameModal }
        isOpen={ isSetNameModalOpen }
      />
    </div>
  );
};

export default SectionsTree;
