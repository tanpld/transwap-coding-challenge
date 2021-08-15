import React from "react";
import Type from "prop-types";
import clsx from "clsx";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  sumary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  status: {
    display: "inline-block",
    borderRadius: "4px",
    padding: "8px 16px",
    color: "#fff",
    backgroundColor: "orange",
    "&.active": {
      backgroundColor: "green",
    },
  },
});

function Bank(props) {
  const { id, name = "Bank of Vietnam", isActive = true } = props;
  const style = useStyles();
  // fetch data
  return (
    <Accordion>
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
        <Typography>
          Detail go here...
        </Typography>
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
