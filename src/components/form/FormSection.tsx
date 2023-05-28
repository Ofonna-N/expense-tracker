import InputSection from "./InputSection";

const FormSection = () => {
  return (
    <form className="py-[3rem] flex flex-col gap-[1rem]">
      <InputSection>
        <label className="font-bold" htmlFor="description">
          Description
        </label>
        <input
          className="form-txt-input"
          type="text"
          id="description"
          placeholder="description"
        />
      </InputSection>
      <InputSection>
        <label className="font-bold" htmlFor="amount">
          Amount
        </label>
        <input
          className="form-txt-input"
          type="number"
          id="amount"
          placeholder="amount"
        />
      </InputSection>
      <InputSection>
        <label className="font-bold" htmlFor="category">
          category
        </label>
        <select
          className="px-[1rem] border py-[0.5rem] rounded-[5px] focus:outline-blue-500"
          id="category"
        >
          <option value="Utility">Utility</option>
          <option value="Groceries">Groceries</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </InputSection>
      <InputSection>
        <button className="bg-blue-600 py-[1rem] rounded-[5px] text-[1.8rem] text-white">
          Submit
        </button>
      </InputSection>
    </form>
  );
};

export default FormSection;
