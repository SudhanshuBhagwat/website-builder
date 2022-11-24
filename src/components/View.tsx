import { useAppSelector } from "../hooks/redux";
import { selectElements } from "../store/elementsSlice";
import { renderComponent } from "./render/renderComponent";

const View = () => {
  const data = useAppSelector(selectElements);

  return <div>{renderComponent(data)}</div>;
};

export default View;
