import React, { useState } from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Country from "./Country";
import BankList from "./BankList";
import useGetCountries from "../queries/useGetCountries";

const useStyles = makeStyles({
  container: {
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
  const { data: countries, isError, isLoading } = useGetCountries();

  const handleSelectCountry = (data) => {
    if (data?.isComing) return;
    setCountry(data);
  };

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
            <Grid item xs={12} md={4} key={`${country?.id}-${country.name}`}>
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
