import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserImg from "./UserImg";
import {
  BrandText,
  Description,
  SubHeading,
  ApplyNowBtn,
} from "../shared/SharedStyles";
import BodyImg from "./BodyImg";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { validationSchema } from "./validate";
import { Grid, Typography, FormGroup, MenuItem } from "@material-ui/core";
import {
  renderTextFieldEdit,
  renderCheckbox,
  renderDatePicker,
  renderTextFieldSelect,
} from "../utils/WtFields";
import { useHistory } from "react-router";
import axios from "axios";
import CustomShape from "../shared/CustomShape";
import YelloImg from "../../assets/Pathyellow.svg";
import RedImg from "../../assets/Pathred.svg";
import { saveState, loadState } from "../utils/Helpers"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    maxWidth: "1920px",
    minHeight: "84vh",
  },
  illust: {
    position: "relative",
    zIndex: -2,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  manHead: {
    fontSize: "3rem",
    color: "white",
    marginBottom: "4rem",
  },
  userImg: {
    marginBottom: "3rem",
  },
  form: {
    width: "40%",
    margin: "130px auto",
    textAlign: "center",
    zIndex: 99,
    "& .head": {
      fontSize: "2.3rem",
      fontWeight: "500",
      marginBottom: "40px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.3rem",
        textAlign: "left",
      },
    },
    "& .genderHead": {
      fontSize: "1rem",
      fontWeight: "300",
      textAlign: "left",
      lineHeight: "0",
      marginTop: "15px",
    },
    "& .contact": {
      textAlign: "left",
      fontSize: "1rem",
      fontWeight: "500",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0px",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  btn: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "left",
    },
  },
  mdhead: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "relative",
      left: -126,
    },
  }
}));

  const Wrapper = () => {
  const classes = useStyles();
  const history = useHistory();
    const [countries, setContries] = useState([]);
    const [userDetail, setUserDetail] = useState(null);
  const USER_STATE = "USER_STATE";

  const initialState = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    nation: "",
    resident: "",
    phone: "",
    email: "",
  };

    useEffect(() => {
    axios.get(
      "https://raw.githubusercontent.com/Dinuks/country-nationality-list/master/countries.json"
    ).then((response) => {
      console.log(response.data);
      const user = loadState(USER_STATE);
      setUserDetail(user);
      setContries(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

    const submitForm = (values) => {
    console.log(values);
    saveState(USER_STATE , values);
    history.push("/step/1");
  };
    
    console.log(userDetail);

  return (
    <div className={classes.root}>
      <CustomShape
        img={YelloImg}
        width="437.76px"
        height="420.8px"
        top="-240px"
        left="20%"
        rotatez="-120deg"
      />
      <CustomShape
        img={RedImg}
        width="337.76px"
        height="420.8px"
        bottom="-280px"
        left="23%"
        rotatez="-30deg"
      />
      <div className={classes.illust}>
        <BrandText color="white">digg</BrandText>
        <Description>
          "Coming to Dubai with One Step Dubai has been the best decision of my
          life. I am now living in Dubai with a good job and I will be getting
          married next year!"
        </Description>
        <SubHeading>Mohammed, One Step Dubai student Pakistan</SubHeading>
        <BodyImg />
        <UserImg />
      </div>
      <div className={classes.form}>
      <BrandText className={classes.mdhead}>digg</BrandText>
        <Typography variant="h1" className="head">
          Apply now to work in Dubai
        </Typography>
        <Formik
          initialValues={userDetail ? userDetail : initialState}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values) => submitForm(values)}
        >
          {({ handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit}>
              <Grid
                container
                spacing={2}
                style={{ marginBottom: "10px" }}
                alignItems="center"
              >
                <Grid item xs={12} sm={6}>
                  <Field
                    name="firstName"
                    label="First name"
                    component={renderTextFieldEdit}
                  ></Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    name="lastName"
                    label="Last name"
                    component={renderTextFieldEdit}
                  ></Field>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={2}
                style={{ marginBottom: "10px" }}
                alignItems="center"
              >
                <Grid item xs={12} sm={6}>
                  <Field
                    name="dob"
                    label="Date Of Birth"
                    component={renderDatePicker}
                  ></Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" className="genderHead">
                    Gender
                  </Typography>
                  <FormGroup row>
                    <Field
                      id="gender"
                      label="Male"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      component={renderCheckbox}
                    />

                    <Field
                      id="gender"
                      label="Female"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      component={renderCheckbox}
                    />
                  </FormGroup>
                  <ErrorMessage
                    component={Typography}
                    style={{ color: "red" }}
                    name="gender"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                style={{ marginBottom: "10px" }}
                alignItems="center"
              >
                <Grid item xs={12} sm={6}>
                  <Field
                    name="nation"
                    label="Nationality"
                    component={renderTextFieldSelect}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {countries.length && countries.map((country, index) => {
                      return (
                        <MenuItem key={index} value={country?.nationality}>
                          {country.nationality}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    name="resident"
                    label="Country of residence"
                    component={renderTextFieldSelect}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {countries.length && countries.map((country, index) => {
                      return (
                        <MenuItem key={index} value={country?.nationality}>
                          {country.nationality}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </Grid>
              </Grid>
              <Typography variant="h1" className="contact">
                How we can contact you?
              </Typography>
              <Grid
                container
                spacing={2}
                style={{ marginBottom: "10px" }}
                alignItems="center"
              >
                <Grid item xs={12} sm={6}>
                  <Field
                    name="phone"
                    label="Contact number"
                    component={renderTextFieldEdit}
                  ></Field>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field
                    name="email"
                    label="Email address"
                    component={renderTextFieldEdit}
                  ></Field>
                </Grid>
              </Grid>

              <Grid
                container
                style={{ marginBottom: "10px" }}
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
                className={classes.btn}
              >
                <ApplyNowBtn type="submit">Apply now</ApplyNowBtn>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Wrapper;
