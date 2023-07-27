import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CryptoState } from "../CryptoContext";

const Header = () => {
const {currency, setCurrency} = CryptoState()
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="sticky">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                color: "red",
                flex: 1,
                cursor: "pointer",
                fontWeight: "bold",
                fontFamily: "Montserrat",
              }}
            >
              <Link to="/">Crypto Tracker</Link>
            </Typography>
            <Select
            onChange={e=>setCurrency(e.target.value)}
            value={currency}
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
