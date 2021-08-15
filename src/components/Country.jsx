import React from "react";
import clsx from "clsx";
import { Paper, Typography, Chip } from "@material-ui/core";
import Type from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";

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
      "&:after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        margin: "-30px",
        width: "60px",
        height: "60px",
        transform: "rotate(45deg)",
        backgroundColor: "#5954E9",
      },
    },
    transition: '0.25s',
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
    height: "100%",
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

function Country(props) {
  const { onClick, isSelected, data } = props;
  const { name, isComing, thumbnailUrl } = data;
  const style = useStyles(props);
  return (
    <Paper
      variant="outlined"
      className={clsx(style.paper, { selected: isSelected })}
      onClick={() => onClick(data)}
    >
      {isSelected && <CheckIcon className={style.checkIcon} />}
      {isComing && (
        <div className={style.overlay}>
          <Chip label="Coming soon..." className={style.chip} />
        </div>
      )}
      <img className={style.img} src={thumbnailUrl} alt={`country-${name}`} />
      <Typography className={style.name}>{name}</Typography>
    </Paper>
  );
}

Country.propTypes = {
  isSelected: Type.bool,
  data: Type.shape({
    id: Type.number.isRequired,
    name: Type.string.isRequired,
    isComing: Type.bool,
    thumbnailUrl: Type.string,
  }),
};

export default Country;
