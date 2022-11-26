import { ChangeEvent } from "react";

interface Props {
  label: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<React.PropsWithChildren<Props> & Props> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg">
      <span className="text-sm text-slate-500 border-r-2 pr-4">{label}</span>
      <input
        type="text"
        className="w-full outline-none mx-2"
        value={value}
        onChange={onChange}
      />
      <span className="text-sm text-slate-500">PX</span>
    </div>
  );
};

export default Input;
