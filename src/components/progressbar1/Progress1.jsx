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
import questions from "./choices";
import { useHistory } from "react-router";
import { saveState } from "../utils/Helpers"

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
  const [choice, setChoice] = useState([]);
  const PROGRESS1_STATE = "PROGRESS1_STATE";

  const nextStep = () => {
    const values = choice.slice(0, 4);
    console.log(choice);
    saveState(PROGRESS1_STATE , values);
    history.push("/step/2");
  };

  const goBack = () => {
    history.goBack();
}

  const selected = (value) => {
    console.log(value);
    setChoice(prevValue => {
      return [...prevValue, value]
    })
    setClicked(value.selection+value.question);
  };

  return (
    <div className={classes.root}>
      <CustomShape
        img={RedImg}
        width="337.76px"
        height="420.8px"
        top="60px"
        left="93%"
        rotatez="-110deg"
      />
      <CustomShape
        img={YellowImg}
        width="337.76px"
        height="420.8px"
        bottom="-270px"
        left="70%"
        rotatez="-110deg"
      />
      <div className={classes.mainHead}>
        <BrandText className="brand">digg</BrandText>
        <CustomProgress progress={10} />
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
