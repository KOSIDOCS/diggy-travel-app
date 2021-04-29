import { styled } from "@material-ui/core/styles";
import { Typography, Chip } from "@material-ui/core";

import Button from '@material-ui/core/Button';

export const ApplyNowBtn = styled(Button)({
  background: 'linear-gradient(45deg, #4734E1 30%, #8E27EA 90%)',
  border: 0,
  borderRadius: 50,
  color: 'white',
  height: 48,
  padding: '27px 55px',
    textTransform: "capitalize",
  marginTop: "15px",
});

export const CustomBtn = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) => props.color === "primary" ? "white" : 'linear-gradient(45deg, #4734E1 30%, #8E27EA 90%)',
  border: (props) => props.color === "primary" ? '1px solid #707070' : 0,
  borderRadius: 50,
  color: (props) => props.color === "primary" ? 'black' : 'white',
  height: 48,
  padding: '27px 55px',
    textTransform: "capitalize",
});

export const CustomChip = styled(Chip)({
    padding: "2",
});

export const BrandText = styled(({ color, ...other }) => <Typography {...other} />)({
  fontFamily: "IBM Plex Sans",
  fontSize: "35px",
  lineHeight: "41px",
  margin: "0 0 40px 0",
  color: (props) => props.color === "white" ? "white" : "black",
  fontWeight: "700",
    position: "absolute",
    left: 70,
    top: 30,
    textTransform: "lowercase",
});

export const Description = styled(Typography)({
  color: "white",
  fontSize: "17px",
  lineHeight: "40px",
  width: "80%",
  position: "absolute",
  bottom: 130,
  left: 50,
});

export const SubHeading = styled(Typography)({
  color: "white",
    fontSize: "17px",
  fontWeight: "500",
  lineHeight: "40px",
  width: "50%",
  position: "absolute",
  bottom: 25,
  left: 50,
});