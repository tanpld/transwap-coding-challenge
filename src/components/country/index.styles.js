import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    cursor: ({ data }) => (data?.isComing ? "auto" : "pointer"),
    border: "solid 1px #CED0D6",
    borderRadius: "8px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem",
    overflow: "hidden",
    "&.selected": {
      borderColor: "#5954E9",
    },
    transition: "0.25s",
  },
  checkCorner: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "-30px",
    width: "60px",
    height: "60px",
    transform: "rotate(45deg)",
    backgroundColor: "#5954E9",
  },
  checkIcon: {
    position: "absolute",
    top: "5px",
    left: "5px",
    zIndex: 1,
    color: "#fff",
    fontSize: "16px",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "64px",
  },
  name: {
    marginTop: "0.5rem",
    fontWeight: "bold",
  },
  chip: {
    backgroundColor: "#555",
    color: "#fff",
  },
}));

export default useStyles;
