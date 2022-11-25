import { useSelector } from "react-redux";
import { selectElements } from "../store/elementsSlice";
import { renderComponent } from "./render/renderComponent";

const View = () => {
  const data = useSelector(selectElements);

  return <div>{renderComponent(data)}</div>;
};

export default View;
