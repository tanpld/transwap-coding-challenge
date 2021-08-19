import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    padding: "32px",
    [theme.breakpoints.down("xs")]: {
      padding: "16px",
    },
    height: "100vh",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "2rem",
  },
}));

export default useStyles;
