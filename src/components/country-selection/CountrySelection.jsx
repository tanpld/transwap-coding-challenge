import React, { useState } from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import Country from "../country/Country";
import BankList from "../bank-list/BankList";
import useGetCountries from "../../queries/useGetCountries";
import { Skeleton } from "@material-ui/lab";
import useStyles from "./index.styles";

function CountrySelection() {
  const style = useStyles();
  const [selectedCountry, setCountry] = useState();
  const { data: countries, isLoading } = useGetCountries();

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
          {isLoading && (
            <>
              {new Array(6).fill("country", 0, 6).map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={`${item}-${index}`}>
                  <Skeleton
                    variant="rect"
                    animation="pulse"
                    height={222}
                    style={{ borderRadius: "8px" }}
                  />
                </Grid>
              ))}
            </>
          )}
          {countries?.map((country) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={`${country?.id}-${country.name}`}
            >
              <Country
                data={country}
                isSelected={country.id === selectedCountry?.id}
                onClick={handleSelectCountry}
                isLoading={isLoading}
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
