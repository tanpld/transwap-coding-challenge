import React from "react";
import Type from "prop-types";
import clsx from "clsx";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CallIcon from "@material-ui/icons/Call";
import useGetBankDetails from "../queries/useGetBankDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "8px",
    border: "0",
  },
  sumary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: "16px",
  },
  status: {
    textAlign: "center",
    boxSizing: "border-box",
    minWidth: "125px",
    fontWeight: "500",
    display: "inline-block",
    borderRadius: "4px",
    padding: "10px 32px",
    color: "#fff",
    backgroundColor: "orange",
    "&.active": {
      backgroundColor: "#00bd06",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: '8px',
      padding: "5px 10px",
      minWidth: "80px",
    },
  },
  bankLogo: {
    width: "300px",
    marginBottom: "8px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  bankName: {
    fontWeight: "bold",
    margin: "32px 0",
  },
  callIcon: {
    color: "blue",
  },
}));

const Accordion = withStyles({
  root: {
    border: 0,
    borderRadius: "8px",
    "&:before": {
      display: "none",
    },
    boxShadow: "unset",
    backgroundColor: "transparent",
    overflow: "hidden",
    "&:not(:last-child)": {
      marginBottom: "4px",
    },
  },
  rounded: {
    "&:last-child": {
      borderRadius: "8px",
    },
  },
  expanded: {
    margin: "4px 0 !important",
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "2px",
    borderBottomRightRadius: "2px",
    backgroundColor: "#fff",
    "&.Mui-expanded": {
      minHeight: "unset",
    },
  },
  content: {
    "&.Mui-expanded": {
      margin: "12px 0",
    },
    "@media (min-width: 600px)": {
      paddingRight: "24px",
    },
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
  root: {
    marginTop: "4px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
    borderTopLeftRadius: "2px",
    borderTopRightRadius: "2px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
})(MuiAccordionDetails);

function Bank(props) {
  const { data } = props;
  const { id, name, isActive } = data;
  const style = useStyles();
  const { data: bankDetails, isError, isLoading } = useGetBankDetails(id);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${name}-content`}
        id={`${name}-header`}
      >
        <div className={style.sumary}>
          <Typography>{name}</Typography>
          <span className={clsx(style.status, { active: isActive })}>
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={style.bankName} variant="h5" component="h3">
          {bankDetails?.name}
        </Typography>
        <img
          className={style.bankLogo}
          src={bankDetails?.logoUrl}
          alt={`${bankDetails?.name}-logo`}
        />
        {bankDetails?.hotline && (
          <Button startIcon={<CallIcon className={style.callIcon} />}>
            <a href={`tel:${bankDetails.hotline}`}>
              <i>{bankDetails.hotline}</i>
            </a>
          </Button>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

Bank.propsTypes = {
  data: Type.shape({
    id: Type.string.isRequired,
    name: Type.string.isRequired,
    isActive: Type.bool,
  }),
};

export default Bank;
