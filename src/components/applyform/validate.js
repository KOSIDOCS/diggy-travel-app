import * as yup from "yup";

const ALLOWED_CHARACTERS_AND_NUMBERS = /(?!^\d+$)^.+$/;

const ALLOWED_NAME_CHARACTERS = /^[a-zA-Z0-9 +"",.-]*$/;

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(40, "First Name cannot be greater than 40 characters")
    .matches(ALLOWED_NAME_CHARACTERS, "Special Characters are not allowed")
    .matches(ALLOWED_CHARACTERS_AND_NUMBERS, "Numbers only not allowed"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(40, "Last Name cannot be greater than 40 characters")
    .matches(ALLOWED_NAME_CHARACTERS, "Special Characters are not allowed")
    .matches(ALLOWED_CHARACTERS_AND_NUMBERS, "Numbers only not allowed"),
  dob: yup.string().required("Must be Included"),
  gender: yup
    .array()
    .required("Select One of the gender")
    .min(1, "Select at least One of The Gender")
    .max(1, "Can only Select One."),
  resident: yup.string().required("Include resident Country"),
  phone: yup.string().required("Include Phone Number"),
    email: yup.string().email('Invalide email').required("Include email address"),
    nation: yup.string().required("Include Nationality"),
});
