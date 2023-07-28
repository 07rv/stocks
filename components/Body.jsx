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
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";

import { stocksList } from "@/data/Data";

const defaultTheme = createTheme();
import { styled } from "@mui/material/styles";
import Chart from "./Chart";

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
    Open: "",
    High: "",
    Low: "",
    Close: "",
    Volume: "",
    Stock: "",
    Data: [],
    Labels: [],
  });
  const [getData, setData] = useState("");
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
      await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          "/v1/open-close/" +
          inputField.stock +
          "/" +
          inputField.date +
          "?adjusted=true&apiKey=" +
          process.env.NEXT_PUBLIC_API_KEY,
        {
          method: "GET",
          redirect: "follow",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status === "OK") {
            setStockData({
              Open: result.open,
              Low: result.low,
              High: result.high,
              Close: result.close,
              Volume: result.volume,
              Stock: result.symbol,
              Data: Array.from(
                { length: 50 },
                () =>
                  Math.floor(
                    Math.random() * (result.high - result.low + 1) + result.low
                  ) + 1
              ),
              Labels: Array.from({ length: 50 }, (_, index) => index + 1),
            });
            setData("OK");
          } else {
            setData("Not Found");
          }
        })
        .catch((error) => {
          setData("Not Found");
        });
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
                      sx={{
                        mt: 3,
                        mb: 2,
                        bgcolor: "black",
                        ":hover": {
                          bgcolor: "#808080",
                        },
                      }}
                      endIcon={<SearchIcon />}
                    >
                      Search
                    </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>
            <Paper
              variant="outlined"
              sx={{
                height: 100,
                bgcolor: "black",
                color: "white",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  p: 1,
                  m: 1,
                  borderRadius: 1,
                }}
              >
                <Box>
                  <h2>Open</h2>
                  <h3>{stocksData.Open}</h3>
                </Box>
                <Box>
                  <h2>Low</h2>
                  <h3>{stocksData.Low}</h3>
                </Box>
                <Box>
                  <h2>High</h2>
                  <h3>{stocksData.High}</h3>
                </Box>
                <Box>
                  <h2>Close</h2>
                  <h3>{stocksData.Close}</h3>
                </Box>
                <Box>
                  <h2>Volume</h2>
                  <h3>{stocksData.Volume}</h3>
                </Box>
              </Box>
            </Paper>
            {getData === "OK" && (
              <Chart
                Title={stocksData.Stock}
                labels={stocksData.Labels}
                data={stocksData.Data}
              />
            )}
            {getData === "Not Found" && (
              <Grid
                sx={{
                  alignContent: "center",
                  justifyContent: "center",
                  display: "flex",
                  mt: 4,
                }}
              >
                <div class="container">
                  <img
                    src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
                    alt="gif_ing"
                  />
                  <p>
                    ...maybe the data you're looking for the stock{" "}
                    <b>{inputField.stock}</b> is not found for choosen date{" "}
                    <b>{inputField.date}</b>
                  </p>
                </div>
              </Grid>
            )}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
