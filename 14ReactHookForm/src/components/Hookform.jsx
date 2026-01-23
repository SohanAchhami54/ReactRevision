import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
const Hookform = () => {
  const formSchema = z.object({
    name: z
      .string()
      .min(5, "Name must be of 5 character long")
      .max(40, "Name must not exceed 40 character"),

    email: z.email(),

    password: z.string()
      .min(8, "Password must be of 8 character long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(formSchema), mode: "onChange" });

  //  useForm({
  //   mode: 'onChange',        // when to validate
  //   resolver: ???,           // function that validates form
  //   defaultValues: {},       // initial form values
  // })
  //useForm({resolver:myResolverFunction})

  async function onsubmit(data) {
    //this is api call
    reset({name:'',email:'',password:''})
    await new Promise((resolve) => {
      return setTimeout(resolve, 3000);
    });
    console.log("Submitting the form", data);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            {...register("name")}
            className="border rounded-md w-60 md:w-70 xl:w-90"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">email:</label>
          <input
            type="email"
            {...register("email")}
            className="border rounded-md w-60 md:w-70 xl:w-90"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message} </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            {...register("password")}
            className="border rounded-md w-60 md:w-70 xl:w-90"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message} </p>
          )}
          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting" : "Submit"}
          />
        </div>
      </form>
    </>
  );
};
export default Hookform;
