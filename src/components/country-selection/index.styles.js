import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "32px",
    backgroundColor: "#F2F3FA",
    [theme.breakpoints.down("xs")]: {
      padding: "16px",
    },
  },
  title: {
    fontWeight: "bold",
    marginBottom: "2rem",
  },
}));

export default useStyles;
