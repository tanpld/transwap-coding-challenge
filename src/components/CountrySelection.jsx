import React from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import Country from "./Country";
import BankList from "./BankList";

function CountrySelection(props) {
  return (
    <Container style={{ height: "100vh", padding: "16px" }}>
      <Typography variant="h3">Country Selection</Typography>
      <Box marginBottom="1rem" marginTop="1rem">
        <Grid container spacing={4}>
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
