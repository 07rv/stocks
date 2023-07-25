import Form from "./Form";
import Stocks from "./Stocks";

import { Box, Grid, Paper } from "@mui/material";
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
  return (
    <Box sx={{ m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item>
            <Form />
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>
            <Stocks />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
