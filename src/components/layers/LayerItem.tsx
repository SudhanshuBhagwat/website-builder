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
      <span className="w-12 aspect-square bg-slate-200 flex justify-center items-center uppercase tracking-widest text-xs">
        {component}
      </span>
      <div className="w-full text-sm flex justify-between items-center pl-4 pr-3">
        <p className="w-full flex items-center">{id}</p>
        <FiChevronDown className="w-6 h-6 text-slate-600" />
      </div>
    </div>
  );
};

export default LayerItem;
