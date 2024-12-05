import * as yup from "yup";
export interface SupplierSchema {
  name: string;
  phone: string;
  email: string;
  address: string;
}
export const SupplierAddModel = yup.object({
  name: yup.string().required("Name is required."),
  phone: yup.string().required("Phone number is required.").matches(/^\d{11}$/, "Phone number must be exactly 11 digits."),
  email: yup.string().required("Phone number is required.").email("Must be a valid email address"),
  address:yup.string().required("Address is required").min(5, "Address must be at least 5 characters"),
})