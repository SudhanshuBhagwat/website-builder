import { renderComponent } from "./render/renderComponent";
import { data } from "../data/data";

const Component = () => {
  return <div>{renderComponent(data)}</div>;
};

export default Component;
