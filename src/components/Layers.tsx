import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/redux";
import {
  IComponent,
  selectElement,
  selectElements,
} from "../store/elementsSlice";
import LayerItem from "./layers/LayerItem";

interface Props {}

const Layers: React.FC<React.PropsWithChildren<Props> & Props> = () => {
  const elements: IComponent = useSelector(selectElements);

  function renderElements(tree: IComponent) {
    return (
      <div key={tree.id}>
        <LayerItem id={tree.id} component={tree.component} />
        <div
          style={{
            paddingLeft: `1rem`,
          }}
        >
          {Array.isArray(tree.children) &&
            tree.children.map((child) => renderElements(child))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-60 border-r">
      <h2 className="px-4 py-3 border-b uppercase tracking-wider font-medium">
        Layers
      </h2>
      <div>{renderElements(elements)}</div>
    </div>
  );
};

export default Layers;
