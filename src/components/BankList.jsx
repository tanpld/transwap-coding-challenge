import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Bank from "./Bank";

const useRowStyles = makeStyles({
  header: {
    display: "flex",
    padding: "0px 16px",
    minHeight: "48px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "transparent",
    textAlign: "center",
    boxSizing: "border-box",
    minWidth: "125px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.54)',
  },
  bankName: {
    fontSize: '12px',
    textTransform: 'unset',
    color: '#0070ff',
    fontWeight: 'bold',
  }
});

function BankList(props) {
  const style = useRowStyles();
  return (
    <>
      <div className={style.header}>
        <Button className={style.bankName} endIcon={<ExpandMoreIcon />}>
          Bank name
        </Button>
        <Box display="flex" alignItems="center" paddingRight='24px'>
          <Typography className={style.status} variant="caption">
            Status
          </Typography>
          <Box width="48px" height="48px" marginRight="-12px" />
        </Box>
      </div>
      <Bank isActive />
      <Bank isActive />
      <Bank />
    </>
  );
}

BankList.propTypes = {};

export default BankList;
