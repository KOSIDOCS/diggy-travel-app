import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomProgress from "../shared/CustomProgress";
import {
  BrandText,
  CustomBtn,
} from "../shared/SharedStyles";
import { Grid } from "@material-ui/core";
import CustomShape from "../shared/CustomShape";
import RedImg from "../../assets/Pathred.svg";
import YellowImg from "../../assets/Pathyellow.svg";
import CustomQuest from "../shared/CustomQuest";
import questions from "./choice";
import { useHistory } from "react-router";

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
      "& >:first-of-type": {
        marginTop: "130px",
      },
    },
    "& .brand": {
      [theme.breakpoints.down("sm")]: {
        left: 45,
      },
    }
  },
  mainHead: {
    position: "relative",
  },
}));

const Progress1 = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState("");
  const history = useHistory();

  const nextStep = () => {
    history.push("/step/6");
  };
    
    const goBack = () => {
        history.goBack();
    }

  const selected = (value) => {
    console.log(value.selection);
    setClicked(value.selection);
    console.log("clicked me");
  };

  return (
    <div className={classes.root}>
      <CustomShape
        img={YellowImg}
        width="337.76px"
        height="420.8px"
        bottom="-280px"
        left="-4%"
        rotatez="-110deg"
          />
          <CustomShape
        img={YellowImg}
        width="337.76px"
        height="420.8px"
        bottom="60px"
        left="91%"
        rotatez="-130deg"
      />
      <CustomShape
        img={RedImg}
        width="337.76px"
        height="420.8px"
        bottom="-255px"
        left="26%"
        rotatez="-85deg"
      />
      <div className={classes.mainHead}>
        <BrandText className="brand">digg</BrandText>
        <CustomProgress progress={50} />
      </div>

      <div className="questions">
        {questions.length &&
          questions.map((question, index) => {
            return (
              <Grid
                container
                style={{ marginBottom: "0px" }}
                className={classes.questions}
                alignItems="flex-start"
              >
                <CustomQuest
                  key={index}
                  question={question.question}
                  onSelect={selected}
                  options={question.answers}
                  itemClicked={clicked}
                />
              </Grid>
            );
          })}

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <CustomBtn color="primary" onClick={goBack}>Back</CustomBtn>
          <CustomBtn style={{ marginLeft: "25px" }} onClick={nextStep}>Next</CustomBtn>
        </Grid>
      </div>
    </div>
  );
};

export default Progress1;
