import React, { useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import {
  TableRow,
  TableCell as MuiTableCell,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper,
  Collapse,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useRowStyles = makeStyles({
  row: {
    borderBottom: "unset",
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

const TableCell = withStyles({
  root: {
    border: 0,
  },
})(MuiTableCell);

const StatusCellProps = {
  align: "center",
  width: "50px",
};

const ExpandCellProps = {
  align: "right",
  width: "40px",
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const style = useRowStyles();
  return (
    <>
      <TableRow className={style.row}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell {...StatusCellProps}>
          <span className={clsx(style.status, { active: row.isActive })}>
            {row.isActive ? "Active" : "Inactive"}
          </span>
        </TableCell>
        <TableCell {...ExpandCellProps}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow className={style.row}>
        <TableCell>
          <Collapse in={open} timeout="auto" unmountOnExit>
            asfasfd
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function BankList(props) {
  const style = useRowStyles();
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className={style.root}>
            <TableCell>Bank name</TableCell>
            <TableCell {...StatusCellProps}>Status</TableCell>
            <TableCell {...ExpandCellProps} />
          </TableRow>
        </TableHead>
        <TableBody>
          <Row key={"Test"} row={{ name: "test", isActive: true, id: "1" }} />
          <Row key={"Test"} row={{ name: "test", isActive: true, id: "1" }} />
          <Row key={"Test"} row={{ name: "test", isActive: false, id: "1" }} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

BankList.propTypes = {};

export default BankList;
