import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ alignItems: "center", bgcolor: "black" }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Stock
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
