import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IStyle, updateElement } from "../../store/elementsSlice";

interface Props {
  elementId: string;
}

const BorderRadius: React.FC<React.PropsWithChildren<Props> & Props> = ({
  elementId,
}) => {
  const dispatch = useAppDispatch();

  function handleBorderRadiusInput(
    type: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight",
    value: string
  ) {
    const style: IStyle = {
      name: `border${type}Radius`,
      value,
    };
    dispatch(
      updateElement({
        type: "style",
        elementId,
        value: style,
      })
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <label>Border Radius</label>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg">
          <span className="text-sm text-slate-500 border-r-2 pr-4">TL</span>
          <input
            type="text"
            className="w-full outline-none mx-2"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleBorderRadiusInput("TopLeft", event.target.value)
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
              handleBorderRadiusInput("TopRight", event.target.value)
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
              handleBorderRadiusInput("BottomLeft", event.target.value)
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
              handleBorderRadiusInput("BottomRight", event.target.value)
            }
          />
          <span className="text-sm text-slate-500">PX</span>
        </div>
      </div>
    </div>
  );
};

export default BorderRadius;
