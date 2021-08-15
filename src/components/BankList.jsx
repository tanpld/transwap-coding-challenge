import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Type from "prop-types";
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
    display: "flex",
    alignItems: "center",
    "@media (min-width: 600px)": {
      paddingRight: "24px",
    },
  },
  statusHead: {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "transparent",
    textAlign: "center",
    boxSizing: "border-box",
    minWidth: "125px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.54)",
  },
  bankName: {
    fontSize: "12px",
    textTransform: "unset",
    color: "#0070ff",
    fontWeight: "bold",
  },
});

function BankList({ data }) {
  const style = useRowStyles();
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
        <Bank key={bank.id} data={bank} />
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
