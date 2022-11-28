import { useSelector } from "react-redux";
import { IComponent, selectElements } from "../store/elementsSlice";
import { renderComponent } from "./render/renderComponent";

const View = () => {
  const data: IComponent = useSelector(selectElements);

  return (
    <div id="component-view">
      <label className="tracking-wider uppercase text-sm font-medium">
        Component
      </label>
      <div className="h-80 aspect-video shadow-xl border flex justify-center items-center rounded-md">
        <div id="component-view">{renderComponent(data)}</div>
      </div>
    </div>
  );
};

export default View;
