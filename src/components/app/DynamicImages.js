import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { Fragment } from "react";
import { generateRandomImage } from "src/utils/generateImage";

export default function DynamicImages() {
  const [age, setAge] = React.useState("");
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = async () => {
    await generateRandomImage({ prompt: text, size: age })
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      <Container sx={{ width: "55ch" }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            margin="dense"
            id="outlined-basic"
            label="Prompt"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              margin="normal"
              value={age}
              label="Size"
              onChange={handleChange}
            >
              <MenuItem value={"256x256"}>Small</MenuItem>
              <MenuItem value={"512x512"}>Medium</MenuItem>
              <MenuItem value={"1024x1024"}>Large</MenuItem>
            </Select>
          </FormControl>
          <Button
            fullWidth
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={handleSubmit}
          >
            Create Image
          </Button>
        </Box>
      </Container>
    </Fragment>
  );
}
