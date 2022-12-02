import { useSelector } from "react-redux";
import { IComponent, selectElements } from "../store/elementsSlice";
import LayerItem from "./layers/LayerItem";

interface Props {}

const Layers: React.FC<React.PropsWithChildren<Props> & Props> = () => {
  const elements: IComponent = useSelector(selectElements);

  function renderElements(tree: IComponent) {
    const hasChildren: boolean = Array.isArray(tree.children);
    return (
      <div key={tree.id}>
        <LayerItem
          id={tree.id}
          component={tree.component}
          hasChildren={hasChildren}
        />
        <div
          style={{
            paddingLeft: "1rem",
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
      <div className="border-b">{renderElements(elements)}</div>
    </div>
  );
};

export default Layers;
