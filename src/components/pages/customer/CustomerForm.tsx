import { useNewCustomerMutation } from "@/redux/features/customer/customerApi";
import { CustomerAddModel, CustomerSchema } from "@/shared/schema/customer/customer.schema";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import showError from "@/utils/ErrorMessage";
import showSuccess from "@/utils/SuccessMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./customerForm.module.scss";
const CustomerForm = () => {
  const [newCustomer, { isLoading }] = useNewCustomerMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid  },
  } = useForm<CustomerSchema>({
    resolver: yupResolver(CustomerAddModel),
     mode: "onChange"
  });
  const onSubmit: SubmitHandler<CustomerSchema> = async (data) => {
    try {
     await newCustomer(data).unwrap();
     showSuccess({ message: "Customer crated!" });
     reset();
    } catch (error) {
      showError({ message: "Something went wrong" });
      console.error("Error adding customer:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.form}>
        <div className={style.input}>
          <Input
            size="md"
            {...register("name")}
            name="name"
            placeholder="Enter customer name"
            error={errors.name ? { status: true, message: errors.name.message } : undefined}
          />
        </div>
        <div className={style.input}>
          <Input
            size="md"
            {...register("phone")}
            name="phone"
            placeholder="Enter phone number"
            error={errors.phone ? { status: true, message: errors.phone.message } : undefined}
          />
        </div>
        <div className={style.input}>
          <Input
            size="md"
            {...register("email")}
            name="email"
            placeholder="Enter email number"
            error={errors.email ? { status: true, message: errors.email.message } : undefined}
          />
        </div>
        <div className={style.address}>
          <Input
            size="md"
            {...register("address")}
            name="address"
            placeholder="Enter address"
            error={errors.address ? { status: true, message: errors.address.message } : undefined}
          />
        </div>
        <div className={style.button}>
          <Button type="submit" disabled={!isValid || isLoading}>
            {isLoading ? "Adding...":"Add"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CustomerForm;
