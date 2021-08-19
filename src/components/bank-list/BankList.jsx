import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Type from "prop-types";
import Bank from "../bank/Bank";
import useStyles from "./index.styles";
import TableHeadCell from "./TableHeadCell";

function BankList({ data }) {
  const [order, setOrder] = useState({ field: "name", order: "ASC" });
  const style = useStyles(order);
  const handleClickTableHeadCell = (field) => {
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
        <TableHeadCell
          order={order}
          name="name"
          label="Bank name"
          onClick={handleClickTableHeadCell}
        />
        <Box className={style.status}>
          <TableHeadCell
            order={order}
            name="status"
            label="Status"
            onClick={handleClickTableHeadCell}
          />
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
  data: Type.arrayOf(
    Type.shape({
      id: Type.string.isRequired,
      name: Type.string.isRequired,
      isActive: Type.bool,
    })
  ),
};

export default BankList;
