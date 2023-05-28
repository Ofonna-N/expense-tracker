const ExpenseItem = () => {
  return (
    <>
      <div className="p-[1rem] border">Milk</div>
      <div className="p-[1rem] border">$5.00</div>
      <div className="p-[1rem] border">Groceries</div>
      <div className="p-[1rem] border">
        <button className="font-semibold rounded-[5px] px-[1rem] py-[0.5rem] border-[2px] border-red-600 text-red-600">
          Delete
        </button>
      </div>
    </>
  );
};

export default ExpenseItem;
