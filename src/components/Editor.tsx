import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/redux";
import { getSelectedElement, updateElement } from "../store/elementsSlice";

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

  function handleBorderRadiusInput(
    type: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight",
    value: number
  ) {}

  return (
    <div>
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
                className="w-full outline-none mx-2"
                value={element.children}
                onChange={handleTextUpdate}
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col space-y-4">
        <label>Padding</label>
        <div className="border-2 border-dashed rounded-lg h-52 relative px-10 py-6 flex justify-center items-center">
          <span className="uppercase tracking-wider text-xs ml-4 mt-2 block absolute top-0 left-0">
            Margin
          </span>
          <input
            type="number"
            className="absolute h-8 w-8 top-1 left-1/2 -ml-4 border text-center"
          />
          <input
            type="number"
            className="absolute h-8 w-8 top-1/2 left-1 -mt-4 border text-center"
          />
          <input
            type="number"
            className="absolute h-8 w-8 top-1/2 right-1 -mt-4 border text-center"
          />
          <input
            type="number"
            className="absolute h-8 w-8 bottom-1 left-1/2 -ml-4 border text-center"
          />
          <div className="h-4/5 w-full border-2 border-blue-400 rounded-lg relative flex justify-center items-center">
            <div className="h-10 w-3/4 bg-slate-200 rounded-lg"></div>
            <input
              type="number"
              className="absolute h-8 w-8 top-1 left-1/2 -ml-4 border text-center"
            />
            <input
              type="number"
              className="absolute h-8 w-8 top-1/2 left-1 -mt-4 border text-center"
            />
            <input
              type="number"
              className="absolute h-8 w-8 top-1/2 right-1 -mt-4 border text-center"
            />
            <input
              type="number"
              className="absolute h-8 w-8 bottom-1 left-1/2 -ml-4 border text-center"
            />
            <span className="uppercase tracking-wider text-xs absolute bottom-2 right-2">
              Padding
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <label>Size</label>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg">
            <span className="text-sm text-slate-500 border-r-2 pr-4">W</span>
            <input type="text" className="w-full outline-none mx-2" />
            <span className="text-sm text-slate-500">PX</span>
          </div>
          <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg">
            <span className="text-sm text-slate-500 border-r-2 pr-4">H</span>
            <input type="text" className="w-full outline-none mx-2" />
            <span className="text-sm text-slate-500">PX</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <label>Border Radius</label>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg">
            <span className="text-sm text-slate-500 border-r-2 pr-4">TL</span>
            <input
              type="text"
              className="w-full outline-none mx-2"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleBorderRadiusInput("TopLeft", parseInt(event.target.value))
              }
            />
            <span className="text-sm text-slate-500">PX</span>
          </div>
          <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg">
            <span className="text-sm text-slate-500 border-r-2 pr-4">TR</span>
            <input
              type="text"
              className="w-full outline-none mx-2"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleBorderRadiusInput(
                  "TopRight",
                  parseInt(event.target.value)
                )
              }
            />
            <span className="text-sm text-slate-500">PX</span>
          </div>
          <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg">
            <span className="text-sm text-slate-500 border-r-2 pr-4">BL</span>
            <input
              type="text"
              className="w-full outline-none mx-2"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleBorderRadiusInput(
                  "BottomLeft",
                  parseInt(event.target.value)
                )
              }
            />
            <span className="text-sm text-slate-500">PX</span>
          </div>
          <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg">
            <span className="text-sm text-slate-500 border-r-2 pr-4">BR</span>
            <input
              type="text"
              className="w-full outline-none mx-2"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleBorderRadiusInput(
                  "BottomRight",
                  parseInt(event.target.value)
                )
              }
            />
            <span className="text-sm text-slate-500">PX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
