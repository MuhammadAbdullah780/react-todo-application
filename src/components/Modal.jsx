import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux-toolkit/slices/todoSlice";
import { toast } from "react-hot-toast";

function Modal({ handleClickOpen, open, handleClose }) {
  const [defaultValue, setDefaultValue] = useState('');
  const dispatch = useDispatch();

  const addtodo = (e) => {
    if (defaultValue.trim().length !== 0) {
      dispatch(
        addTodo({
          title: defaultValue,
        })
      )
    } else {
      e.preventDefault()
      toast.error('Please fill something in the input')
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
      <Box className="mb-2">
        <DialogTitle>Add Todo</DialogTitle>
        <form type='submit' >
          <DialogContent>
            {/* form  */}
            <div class="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Your Title
              </label>
              <input
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-purple-400 focus:outline-none"
                id="exampleFormControlInput3"
                placeholder="Default input"
                value={defaultValue}
                autoFocus
                onChange={(e)=> setDefaultValue(e.target.value) }
              />
            </div>
          </DialogContent>
          <DialogActions className="flex items-center justify-start gap-3 pl-6 ">
            <button type="submit" onClick={addtodo} className="button">
              Add Task
            </button>
            <button type="button" className="button-gray" onClick={handleClose}>
              Cancel
            </button>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  );
}

export default Modal;
