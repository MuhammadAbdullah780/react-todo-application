import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { clearAllTodo } from "./redux-toolkit/slices/todoSlice";
import { toast, Toaster } from "react-hot-toast";
import { motion as m } from "framer-motion";

function Main() {
  const [open, setOpen] = useState(false);
  const myTodo = useSelector((state) => state.todoReducer.myTodos);

  const dispatch = useDispatch();

  // framer motion stuff
  const Button = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleClearAll = () => {
    if (myTodo.length === 0) {
      toast.error("Your TodoList is Empty");
    } else {
      dispatch(clearAllTodo());
      toast.success("All Your Todos was successfully cleared");
    }
  };

  // Modal functions
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <Stack
        spacing={3}
        className="h-contain w-full lg:w-3/4 xl:w-3/5 2xl:w-1/2 m-auto p-5"
      >
        <Box className="p-3 ">
          <Typography
            noWrap={true}
            component="h2"
            className=" text-3xl font-mono md:text-4xl lg:text-5xl text-center font-extrabold text-gray-700 "
          >
            Todo List
          </Typography>
        </Box>
        <Box className="flex items-center gap-5 md:gap-0 justify-center md:justify-around p-3">
          <m.button
            variants={Button}
            initial="hidden"
            animate="show"
            onClick={handleClickOpen}
            className="button"
          >
            Add Task
          </m.button>
          <m.button
            variants={Button}
            initial="hidden"
            animate="show"
            className="button-gray"
            onClick={handleClearAll}
          >
            Clear All
          </m.button>
        </Box>
        <Box>
          <TodoContainer />
        </Box>
      </Stack>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default Main;
