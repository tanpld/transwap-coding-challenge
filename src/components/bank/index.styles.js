import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
      marginTop: "8px",
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

export const StyledAccordion = withStyles({
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

export const StyledAccordionSummary = withStyles({
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

export const StyledAccordionDetails = withStyles({
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
