import {
  Button,
  TextField,
  Grid,
  Box,
  Container,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";

const defaultTheme = createTheme();

const Form = () => {
  const [inputField, setInputField] = useState({
    stock: "",
    date: "",
  });
  const [errorField, setErrorField] = useState({
    stock: "",
    data: "",
  });

  const inputsHandler = (name, value) => {
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrorField((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };
  const setErrorMessage = (field, errorMessage) => {
    setErrorField((prevState) => ({
      ...prevState,
      [field]: errorMessage,
    }));
  };
  const [age, setAge] = useState("");
  const checkAndSetValidationErrors = () => {
    var hasError = false;
    Object.keys(inputField).map((field) => {
      if (field === "email") {
        if (inputField[field] === "") {
          setErrorMessage(field, "Enter Email");
          hasError = true;
        }
      } else if (field === "password") {
        if (inputField[field] === "") {
          setErrorMessage(field, "Enter Password");
          hasError = true;
        }
      }
      return hasError;
    });
  };

  const handleSubmit = async (event) => {
    if (!checkAndSetValidationErrors()) {
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-select-small-label">Stocks</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Stock"
                    name="stock"
                    onChange={(e) =>
                      inputsHandler(e.target.name, e.target.value)
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                {/* <TextField
                  name="email"
                  required
                  error={errorField && errorField.email !== ""}
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoFocus
                  defaultValue={inputField.email}
                  onChange={(e) => inputsHandler(e.target.name, e.target.value)}
                  helperText={
                    errorField && errorField.email !== ""
                      ? errorField.email
                      : ""
                  }
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  required
                  error={errorField && errorField.password !== ""}
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  defaultValue={inputField.password}
                  onChange={(e) => inputsHandler(e.target.name, e.target.value)}
                  helperText={
                    errorField && errorField.password !== ""
                      ? errorField.password
                      : ""
                  }
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Form;
