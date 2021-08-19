import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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
    paddingRight: "39px",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "unset",
    },
  },
  tableHead: {
    fontSize: "12px",
    textTransform: "unset",
    color: "#000000de",
    fontWeight: "bold",
    "&.active": {
      color: "#0070ff",
    },
  },
  sortIcon: {
    transition: "0.25s",
    opacity: 0,
    "&.orderASC": {
      transform: "rotate(-180deg)",
    },
    "&.active": {
      opacity: 1,
    },
  },
}));

export default useStyles;
