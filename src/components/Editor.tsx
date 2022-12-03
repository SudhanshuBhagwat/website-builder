import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/redux";
import { getSelectedElement, updateElement } from "../store/elementsSlice";
import BorderRadius from "./editor/BorderRadius";
import PaddingMargin from "./editor/PaddingMargin";
import Input from "./primitives/Input";

const Editor = () => {
  const dispatch = useAppDispatch();
  const element = useSelector(getSelectedElement);
  let isChildString = false;

  if (element && element.children) {
    if (typeof element.children === "string") {
      isChildString = true;
    }
  }

  function handleTextUpdate(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      updateElement({
        type: "text",
        elementId: element.id,
        value: event.target.value,
      })
    );
  }

  return (
    element && (
      <aside className="h-full w-[22rem] shadow-md px-6 py-6 flex flex-col space-y-4 overflow-y-auto">
        {isChildString && (
          <div className="flex flex-col space-y-4">
            <label>Inner Text</label>
            <div className="">
              <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg w-full">
                <span className="text-sm text-slate-500 border-r-2 pr-4">
                  Text
                </span>
                <input
                  type="text"
                  className="w-full outline-none mx-2 bg-slate-50"
                  value={element.children}
                  onChange={handleTextUpdate}
                />
              </div>
            </div>
          </div>
        )}
        <PaddingMargin />
        <div className="flex flex-col space-y-4">
          <label>Size</label>
          <div className="grid grid-cols-2 gap-4">
            <Input label="W" />
            <Input label="H" />
          </div>
        </div>
        <BorderRadius elementId={element?.id} />
      </aside>
    )
  );
};

export default Editor;
