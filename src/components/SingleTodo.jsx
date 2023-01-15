import React from "react";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteSpecificTodo } from "../redux-toolkit/slices/todoSlice";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import { motion as m } from "framer-motion";

function SingleTodo({ item, key }) {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteSpecificTodo(item.id));
    toast.success("Todo deleted successfully");
  };

  const Item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },

  };

  return (
    <>
      <m.Box
        key={key}
        variants={Item}
        initial='hidden'
        animate='show'
        transition={{
          delay: key*0.05,
        }}
        className="flex items-center bg-white p-2 rounded-sm justify-between w-full"
      >
        {/* left item */}
        <Box display="flex" gap={1}>
          <Box component="div" className="ml-3">
            <Typography
              fontSize="medium"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {item.title}
            </Typography>
            <Typography fontSize="small">
              {format(item.createdAt, "p, MM/dd/yyyy ")}
            </Typography>
          </Box>
        </Box>
        {/* right item  */}
        <Box display="flex" className="pr-3">
          <DeleteIcon
            fontSize="medium"
            className="p-1 active:scale-95 rounded-full cursor-pointer bg-gray-300"
            onClick={handleDeleteTodo}
          />
        </Box>
      </m.Box>
    </>
  );
}

export default SingleTodo;
