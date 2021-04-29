import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import ImgMan from "../../assets/man.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    objectFit: "contain",
    width: "480px",
    height: "50vh",
    margin: "calc(40px + 40pt) 0 0 0",
    position: "absolute",
        left: -2,
    top: 40,
  },
}));

const UserImg = () => {
    const classes = useStyles();

    return (
        <img className={classes.root} src={ImgMan} alt="userImage"/>
    )
}

export default UserImg
