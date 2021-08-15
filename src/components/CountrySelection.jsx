import React from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Country from "./Country";
import BankList from "./BankList";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    padding: '16px',
  },
  title: {
    fontWeight: "bold",
    marginBottom: "2rem",
  },
});

function CountrySelection(props) {
  const style = useStyles();
  return (
    <Container className={style.container}>
      <Typography className={style.title} component="h3" variant="h5">
        Country Selection
      </Typography>
      <Typography variant="body1">
        Please select your registered country or region:
      </Typography>
      <Box marginTop="1.5rem">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Country isComing={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Country />
          </Grid>
          <Grid item xs={12} md={4}>
            <Country />
          </Grid>
          <Grid item xs={12} md={4}>
            <Country />
          </Grid>
          <Grid item xs={12} md={4}>
            <Country />
          </Grid>
        </Grid>
      </Box>
      <BankList />
    </Container>
  );
}

export default CountrySelection;
