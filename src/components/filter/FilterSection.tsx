import { useEffect, useRef } from "react";
import useExpenseContext from "../../customhooks/useExpenseContext";

const FilterSection = () => {
  const expenseCtx = useExpenseContext();
  const filterRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    expenseCtx.setFilter(filterRef.current?.value || "All");
    // console.log(filterRef.current?.value);
  }, []);

  return (
    <form className="border rounded-[8px] mb-[1rem] ">
      <select
        className="w-full p-[1rem] cursor-pointer focus:outline-blue-600"
        id="catfilter"
        ref={filterRef}
        onChange={() => {
          expenseCtx.setFilter(filterRef.current?.value || "All");
        }}
      >
        <option value="All">All</option>
        <option value="Utility">Utility</option>
        <option value="Groceries">Groceries</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </form>
  );
};

export default FilterSection;
