import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import { CustomChip } from "../shared/SharedStyles";
import CustomChoice from "../shared/CustomChoice";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  heading: {
    fontSize: "1.9rem",
    fontWeight: "400",
    textAlign: "left",
  },
});

const CustomQuest = ({ question, options, onSelect, itemClicked }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.heading}>
        {question}
      </Typography>
      <Grid container spacing="2" style={{ marginBottom: "10px" }}>
        {options.length &&
          options.map((option, index) => {
            return (
              <Grid item>
                <CustomChoice
                  key={option.answer}
                  highlight={option.answer === itemClicked && "secondary"}
                  img={
                    option.icon &&
                    "https://github.com/raffi23/digg-api-dummy/raw/main/images/" +
                      option.icon +
                      ".svg"
                  }
                  label={option.answer}
                  click={() => onSelect({ selection: option.answer })}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default CustomQuest;
