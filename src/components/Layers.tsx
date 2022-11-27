import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/redux";
import { IComponent, selectElements } from "../store/elementsSlice";
import LayerItem from "./layers/LayerItem";

interface Props {}

const Layers: React.FC<React.PropsWithChildren<Props> & Props> = () => {
  const elements: IComponent = useSelector(selectElements);

  return (
    <div className="w-60 border-r">
      <h2 className="px-4 py-3 border-b uppercase tracking-wider font-medium">
        Layers
      </h2>
      <div>{<LayerItem id={elements.id} component={elements.component} />}</div>
    </div>
  );
};

export default Layers;
