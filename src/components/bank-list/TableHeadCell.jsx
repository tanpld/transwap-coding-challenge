import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Type from "prop-types";
import useStyles from "./index.styles";

function TableHeadCell(props) {
  const style = useStyles();
  const { order, name, label, onClick } = props;
  return (
    <Button
      className={clsx(style.tableHead, { active: order.field === name })}
      endIcon={
        <ExpandMoreIcon
          className={clsx(style.sortIcon, {
            active: order.field === name,
            orderASC: order.field === name && order.order === "ASC",
          })}
        />
      }
      onClick={() => onClick(name)}
    >
      {label}
    </Button>
  );
}

TableHeadCell.propTypes = {
  order: Type.shape({
    field: Type.string,
    order: Type.oneOf(["ASC", "DESC"]),
  }),
  name: Type.string,
  label: Type.string,
  onClick: Type.func,
};

export default TableHeadCell;
