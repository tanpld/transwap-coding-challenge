import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Type from "prop-types";
import clsx from "clsx";
import Bank from "../bank/Bank";
import useStyles from "./index.styles";

function BankList({ data }) {
  const [order, setOrder] = useState({ field: "name", order: "ASC" });
  const style = useStyles(order);
  const handleClickTableHead = (field) => {
    if (field === order.field) {
      setOrder((prevOrder) => ({
        ...prevOrder,
        order: order.order === "ASC" ? "DESC" : "ASC",
      }));
    }
    setOrder((prevOrder) => ({ ...prevOrder, field }));
  };
  return (
    <>
      <div className={style.header}>
        <Button
          className={clsx(style.tableHead, { active: order.field === "name" })}
          endIcon={
            <ExpandMoreIcon
              className={clsx(style.sortIcon, {
                active: order.field === "name",
                orderASC: order.field === "name" && order.order === "ASC",
              })}
            />
          }
          onClick={() => handleClickTableHead("name")}
        >
          Bank name
        </Button>
        <Box className={style.status}>
          <Button
            className={clsx(style.tableHead, {
              active: order.field === "status",
            })}
            endIcon={
              <ExpandMoreIcon
                className={clsx(style.sortIcon, {
                  active: order.field === "status",
                  orderASC: order.field === "status" && order.order === "ASC",
                })}
              />
            }
            onClick={() => handleClickTableHead("status")}
          >
            Status
          </Button>
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
