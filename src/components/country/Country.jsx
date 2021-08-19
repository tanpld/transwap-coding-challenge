import React from "react";
import clsx from "clsx";
import { Paper, Typography, Chip, Fade } from "@material-ui/core";
import Type from "prop-types";
import CheckIcon from "@material-ui/icons/Check";
import useStyles from "./index.styles";

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
      <Fade in={isSelected}>
        <div className={style.checkCorner} />
      </Fade>
      <Fade in={isSelected}>
        <CheckIcon className={style.checkIcon} />
      </Fade>
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
