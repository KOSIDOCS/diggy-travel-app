import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { LinearProgress, Typography } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'linear-gradient(45deg, #4734E1 30%, #8E27EA 90%)',
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
      display: "flex",
      flexDirection: "column",
      width: "72%",
      position: "absolute",
      left: 400,
      top: 50,
      "& .head": {
          color: "black"
      },
      [theme.breakpoints.down("sm")]: {
        display: "block",
        position: "relative",
        left: 45,
        top: 120,
      },
  },
}));

const CustomProgress = ({ progress }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="body2" className="head">Progress</Typography>
            <BorderLinearProgress variant="determinate" value={progress} />
        </div>
    )
}

export default CustomProgress
