import React from "react";
import Type from "prop-types";
import clsx from "clsx";
import { Typography, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CallIcon from "@material-ui/icons/Call";
import { Skeleton } from "@material-ui/lab";
import useGetBankDetails from "../../queries/useGetBankDetails";
import {
  useStyles,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "./index.styles";

function Bank(props) {
  const { data } = props;
  const { id, name, isActive } = data;
  const style = useStyles();
  const { data: bankDetails, isLoading } = useGetBankDetails(id);

  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="rect"
          animation="pulse"
          height={58}
          style={{ borderRadius: "8px", marginBottom: "4px" }}
        />
      ) : (
        <StyledAccordion>
          <StyledAccordionSummary
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
          </StyledAccordionSummary>
          <StyledAccordionDetails>
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
          </StyledAccordionDetails>
        </StyledAccordion>
      )}
    </>
  );
}

Bank.propsTypes = {
  data: Type.shape({
    id: Type.number.isRequired,
    name: Type.string.isRequired,
    isActive: Type.bool,
  }),
};

export default Bank;
