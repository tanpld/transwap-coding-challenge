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
    paddingRight: "24px",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "unset",
    },
  },
  statusHead: {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "transparent",
    textAlign: "center",
    boxSizing: "border-box",
    minWidth: "125px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.54)",
    [theme.breakpoints.down("xs")]: {
      minWidth: "80px",
    },
  },
  bankName: {
    fontSize: "12px",
    textTransform: "unset",
    color: "#0070ff",
    fontWeight: "bold",
  },
}));

export default useStyles;
