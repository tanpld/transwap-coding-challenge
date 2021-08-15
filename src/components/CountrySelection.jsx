import React, { useState } from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Country from "./Country";
import BankList from "./BankList";
import { useQuery } from "react-query";

const useStyles = makeStyles({
  container: {
    height: "100%",
    padding: "32px",
    backgroundColor: "#F2F3FA",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "2rem",
  },
});

function CountrySelection() {
  const style = useStyles();
  const [selectedCountry, setCountry] = useState();

  const handleSelectCountry = (data) => {
    if (data?.isComing) return;
    setCountry(data);
  };

  const {
    data: countries,
  } = useQuery("countries", () =>
    fetch(
      "https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/countries"
    ).then((res) => res.json())
  );

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
          {countries?.map((country) => (
            <Grid item xs={12} md={4} key={country?.id}>
              <Country
                data={country}
                isSelected={country.id === selectedCountry?.id}
                onClick={handleSelectCountry}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {selectedCountry && <BankList data={selectedCountry?.supportedBanks} />}
    </Container>
  );
}

export default CountrySelection;
