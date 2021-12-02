import React, { FC, useState } from "react";

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

interface IProps {
    initialName: string;
    onSetName: (name: string) => void;
    onCancel: () => void;
    isOpen: boolean
}

const SetNameModal: FC<IProps> = ({ initialName, onSetName, onCancel, isOpen }) => {
  const [ name, setName ] = useState(initialName);

  return (
    <Dialog
      open={ isOpen }
      onClose={ onCancel }
    >
      <DialogTitle>Введите имя</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Имя"
          fullWidth
          variant="standard"
          onChange={ (e) => setName(e.currentTarget.value) }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={ onCancel }>Отменить</Button>
        <Button onClick={ () => onSetName(name) }>Подтвердить</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SetNameModal;
