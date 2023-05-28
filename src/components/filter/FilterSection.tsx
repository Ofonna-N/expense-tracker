const FilterSection = () => {
  return (
    <form className="border rounded-[8px] mb-[1rem] ">
      <select
        className="w-full p-[1rem] cursor-pointer focus:outline-blue-600"
        id="catfilter"
      >
        <option value="Utility">Utility</option>
        <option value="Groceries">Groceries</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </form>
  );
};

export default FilterSection;
