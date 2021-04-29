import React from "react";
import TextField from "@material-ui/core/TextField";
import WarningIcon from "@material-ui/icons/Warning";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
    root: {
      color: 'linear-gradient(45deg, #4734E1 30%, #8E27EA 90%)',
      '&$checked': {
        color: 'linear-gradient(45deg, #4734E1 30%, #8E27EA 90%)',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

/**********************************************


 FORMIK Fields
 ***********************************************/
 export const renderTextFieldEdit = ({
    field,
    form: { touched, errors },
    ...props
  }) => (
    <TextField
      label={field.label}
      placeholder={field.label}
      error={hasEditErrorMessage(touched, errors, field)}
      id={field.id}
      {...field}
      {...props}
         fullWidth={true}
         variant="filled"
      helperText={displayErrorMessageEdit(touched, errors, field)}
    />
 );

 export const renderDatePicker = ({
    field,
    form: { touched, errors },
    ...props
  }) => (
    <TextField
      label={field.label}
      placeholder={field.label}
      error={hasEditErrorMessage(touched, errors, field)}
      id={field.id}
      {...field}
      {...props}
      margin={
        field.margin !== null && field.margin !== undefined
          ? field.margin
          : "dense"
      }
      fullWidth={true}
      InputLabelProps={{
        shrink: true,
      }}
      type="date"
      format="mm/dd/yyyy"
      variant="filled"
      helperText={displayErrorMessageEdit(touched, errors, field)}
    />
 );
  
 export const renderCheckbox = ({ input, label, value, onChange, id }) => (
    <div>
      <FormControlLabel
        control={
          <GreenCheckbox
            onChange={onChange}
            value={value}
            id={id}
            color="primary"
          />
        }
        label={label}
      />
    </div>
 );
  
 export const renderTextFieldSelect = ({
    field,
    form: { touched, errors },
    children,
    ...props
  }) => (
    <TextField
      select
      label={field.label}
      placeholder={field.label}
      required={field.required}
      error={hasEditErrorMessage(touched, errors, field)}
      id={field.id}
      {...field}
      {...props}
      margin={
        field.margin !== null && field.margin !== undefined
          ? field.margin
          : "dense"
      }
      fullWidth={true}
      variant="filled"
      helperText={displayErrorMessageEdit(touched, errors, field)}
      defaultValue=""
    >
      {children}
    </TextField>
  );
  
 const hasEditErrorMessage = (touched, errors, field) => {
    let theField = field.name;
    if (errors.hasOwnProperty(theField) && touched.hasOwnProperty(theField)) {
      return true;
    }
    return false;
  };
  
  const displayErrorMessageEdit = (touched, errors, field) => {
    let theField = field.name;
    if (errors.hasOwnProperty(theField) && touched.hasOwnProperty(theField)) {
      const msg = Object.getOwnPropertyDescriptor(errors, theField);
      return (
        <span>
          {" "}
          <WarningIcon fontSize="small" /> {msg.value}
        </span>
      );
    } else {
      return null;
    }
  }; 