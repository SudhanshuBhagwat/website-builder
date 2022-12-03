import { useSearchParams } from "react-router-dom";
import Nav, { NAV_ITEMS } from "./Nav";
import Elements from "./panels/Elements";
import Layers from "./panels/Layers";

const panels = NAV_ITEMS.map((item) => item.slug);

function getPanel(panel: string | null) {
  if (panel) {
    const selectedPanel = panels.find((p) => p === panel);
    switch (selectedPanel) {
      case "layers":
        return <Layers />;
      case "elements":
        return <Elements />;
      default:
        console.error("No such layer");
        return;
    }
  }
}

const Sidebar = () => {
  const [searchParams] = useSearchParams();
  const selectedPanel = searchParams.get("panel");

  return (
    <aside className="flex">
      <Nav />
      {getPanel(selectedPanel)}
    </aside>
  );
};

export default Sidebar;
