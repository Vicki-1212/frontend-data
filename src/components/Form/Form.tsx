/** @format */

import React, { useState } from "react";

import {
  Box,
  Button,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";

const Form = () => {
  const [inputText, setInputText] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleEdit = () => {
    setInputText("");
  };

  const handleOnSave = async () => {
    //send the input value to backend to store in database
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    };
    const response = await fetch(
      "https://backend-data-qqiy.onrender.com/api/data",
      options
    );
    const data = await response.json();
    setResponse(data.message);
  };

  return (
    <Stack className="min h-screen flex flex-col justify-center items-center gap-4 p-5">
      <Typography className="text-xl">Heading</Typography>
      <TextareaAutosize
        minRows={6}
        cols={50}
        value={inputText}
        className="border-1 rounded-sm pl-2 pt-2"
        onChange={handleOnChange}
      />
      <Box className="flex gap-10">
        <Button variant="outlined" onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="contained" onClick={handleOnSave}>
          Save
        </Button>
      </Box>
      <Typography className="text-green-600">{response}</Typography>
    </Stack>
  );
};

export default Form;
