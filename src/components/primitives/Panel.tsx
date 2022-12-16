import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Props {
  title: String;
}

const Panel: React.FC<React.PropsWithChildren<Props> & Props> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="flex flex-col">
      <h2 className="py-2 px-4 text-sm border-y uppercase tracking-wider font-medium flex justify-between items-center cursor-pointer">
        <label className="cursor-pointer">{title}</label>
        {isOpen ? (
          <FiChevronUp className="w-6 h-6 text-slate-400" />
        ) : (
          <FiChevronDown className="w-6 h-6 text-slate-400" />
        )}
      </h2>
      {isOpen && <div className="my-4">{children}</div>}
    </div>
  );
};

export default Panel;
