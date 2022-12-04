import { useSelector } from "react-redux";
import { getSelectedElement } from "../store/elementsSlice";
import BorderRadius from "./editor/BorderRadius";
import PaddingMargin from "./editor/PaddingMargin";
import Sizing from "./editor/Sizing";
import TextEdit from "./editor/TextEdit";

const Editor = () => {
  const element = useSelector(getSelectedElement);
  const elementId = element?.id;
  const styles = element?.styles;
  let isChildString = false;

  if (element && element.children) {
    if (typeof element.children === "string") {
      isChildString = true;
    }
  }

  return (
    element && (
      <aside className="h-full w-[22rem] shadow-md py-6 flex flex-col space-y-4 overflow-y-auto">
        {isChildString && (
          <TextEdit elementId={elementId} value={element.children} />
        )}
        <PaddingMargin elementId={elementId} styles={styles} />
        <Sizing elementId={elementId} styles={styles} />
        <BorderRadius elementId={elementId} styles={styles} />
      </aside>
    )
  );
};

export default Editor;
