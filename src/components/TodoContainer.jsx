import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";
import { AnimatePresence, motion as m } from "framer-motion";

const TodoContainer = () => {
  const getTodo = useSelector((state) => state.todoReducer.myTodos);

  // framer stuff
  const TodoAnimate = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      staggerChildren: 0.2,
    },
  };

  // const childAnimate = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   show: {
  //     opacity: 1,
  //   },
  //   transition: {
  //     duration: 0.8,
  //   },
  // };

  const noTodosAnimations = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return getTodo.length !== 0 ? (
    <m.Box
      className="p-3 py-5 flex flex-col gap-2 items-center justify-center rounded-xl bg-gray-300 "
      variants={TodoAnimate}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {getTodo.map((item, i) => (
          <SingleTodo item={item} key={i} />
        ))}
      </AnimatePresence>
    </m.Box>
  ) : (
    <Box className="p-3 py-5 flex flex-col gap-2 items-center justify-center rounded-xl bg-gray-300 ">
      <m.h3
        className="bg-gray-400 px-3 py-2 rounded-md "
        variants={noTodosAnimations}
        initial="hidden"
        animate="show"
      >
        No todos
      </m.h3>
    </Box>
  );
};

export default TodoContainer;
