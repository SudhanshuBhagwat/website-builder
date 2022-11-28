import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/redux";
import {
  getSelectedElement,
  IComponent,
  selectElement,
} from "../../store/elementsSlice";

interface Props {
  id: IComponent["id"];
  component: IComponent["component"];
}

const LayerItem: React.FC<React.PropsWithChildren<Props> & Props> = ({
  id,
  component,
}) => {
  const dispatch = useAppDispatch();
  const selectedElement: IComponent = useSelector(getSelectedElement);

  return (
    <div
      className={`${
        selectedElement && id === selectedElement.id
          ? "border-sky-600 border"
          : "border-b"
      } flex`}
      onClick={() => dispatch(selectElement(id))}
    >
      <button className="flex items-center justify-center px-2">
        <FiChevronDown className="w-6 h-6 text-slate-600" />
      </button>
      <div className="w-full text-sm flex justify-between items-center pl-1">
        <p className="w-full flex items-center">{id}</p>
        <span className="w-[40px] h-[40px] aspect-square bg-slate-200 flex justify-center items-center uppercase tracking-widest text-xs">
          {component}
        </span>
      </div>
    </div>
  );
};

export default LayerItem;
