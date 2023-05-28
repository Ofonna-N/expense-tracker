import React from "react";

type Props = {
  children: React.ReactNode;
};

const InputSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="py-[1rem] px-[1rem] flex flex-col gap-2">{children}</div>
  );
};

export default InputSection;
