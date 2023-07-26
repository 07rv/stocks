import {
  Button,
  TextField,
  Grid,
  Box,
  Paper,
  Container,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";

import { stocksList } from "@/data/Data";

const defaultTheme = createTheme();
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "600px",
}));

const Body = () => {
  const [inputField, setInputField] = useState({
    stock: "",
    date: "",
  });
  const [errorField, setErrorField] = useState({
    stock: "",
    date: "",
  });
  const [stocksData, setStockData] = useState({
    open: "",
    High: "",
    Low: "",
    Close: "",
    Volume: "",
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
  const checkAndSetValidationErrors = () => {
    var hasError = false;
    Object.keys(inputField).map((field) => {
      if (field === "stock") {
        if (inputField[field] === "") {
          setErrorMessage(field, "Please Select Stock");
          hasError = true;
        }
      } else if (field === "date") {
        if (inputField[field] === "") {
          setErrorMessage(field, "Please choose date");
          hasError = true;
        }
      }
    });
    return hasError;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!checkAndSetValidationErrors()) {
      const res = await fetch("/api/stock", {
        method: "GET",
      });
      const data = await res.json();
      setStockData(data);
    }
  };
  return (
    <Box sx={{ m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item>
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
                        <FormControl
                          fullWidth
                          sx={{ minWidth: 120 }}
                          error={errorField && errorField.stock !== ""}
                        >
                          <InputLabel id="stock">Stocks</InputLabel>
                          <Select
                            labelId="stock"
                            id="stockl"
                            value={inputField.stock}
                            label="Stock"
                            name="stock"
                            onChange={(e) =>
                              inputsHandler("stock", e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {stocksList.map((stock) => {
                              return (
                                <MenuItem
                                  key={stock.id}
                                  value={stock.stockTicker}
                                >
                                  {stock.company}
                                </MenuItem>
                              );
                            })}
                          </Select>
                          {errorField && errorField.stock !== "" && (
                            <FormHelperText>{errorField.stock}</FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl
                          fullWidth
                          sx={{ minWidth: 120 }}
                          error={errorField && errorField.date !== ""}
                        >
                          <TextField
                            name="date"
                            required
                            fullWidth
                            id="date"
                            type="date"
                            value={inputField.date}
                            error={errorField && errorField.date !== ""}
                            onChange={(e) =>
                              inputsHandler(e.target.name, e.target.value)
                            }
                          />
                          {errorField && errorField.date !== "" && (
                            <FormHelperText>{errorField.date}</FormHelperText>
                          )}
                        </FormControl>
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
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>wert</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
