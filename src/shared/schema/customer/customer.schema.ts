import * as yup from "yup";
export interface CustomerSchema {
  name: string;
  phone: string;
  email: string;
  address: string;
}
export const CustomerAddModel = yup.object({
  name: yup.string().required("Name is required."),
  phone: yup.string().required("Phone number is required.").matches(/^\d{11}$/, "Phone number must be exactly 11 digits."),
  email: yup.string().required("Phone number is required.").email("Must be a valid email address"),
  address:yup.string().required("Address is required"),
})