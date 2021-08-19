import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Type from "prop-types";
import Bank from "../bank/Bank";
import useStyles from './index.styles';

function BankList({ data }) {
  const style = useStyles();
  return (
    <>
      <div className={style.header}>
        <Button className={style.bankName} endIcon={<ExpandMoreIcon />}>
          Bank name
        </Button>
        <Box className={style.status}>
          <Typography className={style.statusHead} variant="caption">
            Status
          </Typography>
          <Box width="48px" height="48px" marginRight="-12px" />
        </Box>
      </div>
      {data?.map((bank) => (
        <Bank key={`${bank.id}-${bank.name}`} data={bank} />
      ))}
    </>
  );
}

BankList.propTypes = {
  data: Type.arrayOf({
    id: Type.string.isRequired,
    name: Type.string.isRequired,
    isActive: Type.bool,
  }),
};

export default BankList;
