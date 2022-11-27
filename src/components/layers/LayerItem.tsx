import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IComponent } from "../../store/elementsSlice";

interface Props {
  id: IComponent["id"];
  component: IComponent["component"];
}

const LayerItem: React.FC<React.PropsWithChildren<Props> & Props> = ({
  id,
  component,
}) => {
  return (
    <div className="flex border-b">
      <span className="w-12 aspect-square bg-slate-200 flex justify-center items-center uppercase tracking-widest text-sm">
        {component}
      </span>
      <div className="w-full flex justify-between items-center pl-4 pr-3">
        <p className="w-full flex items-center">{id}</p>
        <FiChevronDown className="w-6 h-6 text-slate-600" />
      </div>
    </div>
  );
};

export default LayerItem;
