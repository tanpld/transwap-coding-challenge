import React from "react";
import Type from "prop-types";
import clsx from "clsx";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
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
    textAlign: 'center',
    boxSizing:'border-box',
    minWidth: '125px',
    fontWeight: '500',
    display: "inline-block",
    borderRadius: "4px",
    padding: "10px 32px",
    color: "#fff",
    backgroundColor: "orange",
    "&.active": {
      backgroundColor: "#00bd06",
    },
  },
});

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
    paddingRight: '24px',
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
  },
})(MuiAccordionDetails);

function Bank(props) {
  const { id, name = "Bank of Vietnam", isActive } = props;
  const style = useStyles();
  // fetch data
  return (
    <Accordion component="div">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${name}-content`}
        id={`${name}-header`}
      >
        <div className={style.sumary}>
          <Typography component="div">{name}</Typography>
          <span className={clsx(style.status, { active: isActive })}>
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Detail go here...</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

Bank.propsTypes = {
  id: Type.string.isRequired,
  name: Type.string.isRequired,
  isActive: Type.bool,
};

export default Bank;
