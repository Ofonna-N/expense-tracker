import { useForm, SubmitHandler } from "react-hook-form";
import InputSection from "./InputSection";
import { Expense } from "../../customTypes/CustomTypes";
import useExpenseContext from "../../customhooks/useExpenseContext";
import { v4 as uuidv4 } from "uuid";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const schema = Joi.object({
  description: Joi.string().min(3).required(),
  amount: Joi.number().min(0).required(),
  category: Joi.string(),
});

const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Expense>({ resolver: joiResolver(schema) });

  const expenseCtx = useExpenseContext();
  // console.log(errors);
  const onSubmit: SubmitHandler<Expense> = (data) => {
    data.id = uuidv4();
    expenseCtx.addExpense(data);
    // console.log(data);
    // console.log(expenseCtx);
  };

  return (
    <form
      className="py-[3rem] flex flex-col gap-[1rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputSection>
        <label className="font-bold" htmlFor="description">
          Description
        </label>
        <input
          className="form-txt-input"
          type="text"
          id="description"
          {...register("description", { required: true, min: 3 })}
          placeholder="description"
        />
        <p className="text-red-500 text-[1.3rem]">
          {errors.description?.message}
        </p>
      </InputSection>
      <InputSection>
        <label className="font-bold" htmlFor="amount">
          Amount
        </label>
        <input
          className="form-txt-input"
          type="number"
          id="amount"
          step={0.01}
          {...register("amount", { required: true, min: 0 })}
          placeholder="amount"
        />
        <p className="text-red-500 text-[1.3rem]">{errors.amount?.message}</p>
      </InputSection>
      <InputSection>
        <label className="font-bold" htmlFor="category">
          category
        </label>
        <select
          className="px-[1rem] border py-[0.5rem] rounded-[5px] focus:outline-blue-500"
          id="category"
          // ref={refTest}
          {...register("category")}
        >
          <option value="Utility">Utility</option>
          <option value="Groceries">Groceries</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </InputSection>
      <InputSection>
        <button className="bg-blue-600 py-[1rem] rounded-[5px] text-[1.8rem] text-white hover:bg-blue-700">
          Submit
        </button>
      </InputSection>
    </form>
  );
};

export default FormSection;
