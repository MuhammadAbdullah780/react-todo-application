import React, { useMemo } from "react";
import { Box } from "@mui/material";
import Main from "./Main";
import { useDispatch } from "react-redux";
import { getTodos } from "./redux-toolkit/slices/todoSlice";

function App() {
  const dispatch = useDispatch();
  useMemo(() => {
    dispatch(getTodos());
    console.log(dispatch(getTodos()));
  }, [dispatch]);

  return (
    <Box component="main" className="h-full w-full  pt-32">
      <Main />
    </Box>
  );
}

export default App;
