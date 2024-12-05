import { useNewSupplierMutation } from "@/redux/features/supplier/supplierApi";
import { SupplierAddModel, SupplierSchema } from "@/shared/schema/supplier/supplier.shcema";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import Textarea from "@/shared/ui/textarea";
import showError from "@/utils/ErrorMessage";
import showSuccess from "@/utils/SuccessMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./supplierForm.module.scss";
const SupplierForm = () => {
  const [newCustomer, { isLoading }] = useNewSupplierMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SupplierSchema>({
    resolver: yupResolver(SupplierAddModel),
    mode: "all",
  });
  const onSubmit: SubmitHandler<SupplierSchema> = async (data) => {
    try {
      await newCustomer(data).unwrap();
      showSuccess({ message: "Supplier crated!" });
      reset();
    } catch (error) {
      showError({ message: "Something went wrong" });
      console.error("Error adding supplier", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.form}>
        <div className={style.input}>
          <Input
            {...register("name")}
            error={errors.name ? { status: true, message: errors.name.message } : undefined}
            size="md"
            name="name"
            placeholder="Enter supplier name"
          />
        </div>
        <div className={style.input}>
          <Input
            {...register("phone")}
            error={errors.phone ? { status: true, message: errors.phone.message } : undefined}
            size="md"
            name="phone"
            placeholder="Enter phone number"
          />
        </div>
        <div className={style.input}>
          <Input
            {...register("email")}
            error={errors.email ? { status: true, message: errors.email.message } : undefined}
            type="email"
            size="md"
            name="email"
            placeholder="Enter email address"
          />
        </div>
        <div className={style.address}>
          <Textarea
            {...register("address")}
            error={errors.address ? { status: true, message: errors.address.message } : undefined}
            name="address"
            placeholder="Enter address"
          />
        </div>
        <div className={style.button}>
          <Button type="submit" size="md" disabled={!isValid || isLoading}>
            {isLoading ? "Adding..." : "Add"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SupplierForm;
