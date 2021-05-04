import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  sizeAvatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Avatar"
        src="https://i.imgur.com/wnuKAT5.jpg"
        className={classes.sizeAvatar}
      />
    </div>
  );
}
