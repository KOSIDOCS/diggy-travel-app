import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomProgress from "../shared/CustomProgress";
import { BrandText, CustomBtn } from "../shared/SharedStyles";
import { Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { saveState } from "../utils/Helpers";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    maxWidth: "1920px",
    minHeight: "84vh",
    "& .questions": {
      position: "relative",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      "& >:first-of-type": {
        marginTop: "130px",
      },
    },
    "& .brand": {
      [theme.breakpoints.down("sm")]: {
        left: 45,
      },
    },
  },
  mainHead: {
    position: "relative",
  },
  topbox: {
    display: "flex",
    flexDirection: "column",
    background: "#EFEFEF",
  },
}));

const Progress1 = () => {
  const classes = useStyles();
  const history = useHistory();

  const nextStep = () => {
    history.push("/");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <div className={classes.mainHead}>
        <BrandText className="brand">digg</BrandText>
        <CustomProgress progress={100} />
      </div>

      <div className="questions">
        <Typography>Complete - Review your application</Typography>
        <div className={classes.topbox}>
          <Grid
            container
            direction="row"
            spacing="2"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography></Typography>
            </Grid>
          </Grid>
        </div>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <CustomBtn color="primary" onClick={goBack}>
            Back
          </CustomBtn>
          <CustomBtn style={{ marginLeft: "25px" }} onClick={nextStep}>
            Complete Application
          </CustomBtn>
        </Grid>
      </div>
    </div>
  );
};

export default Progress1;
