import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IStyle, updateElement } from "../../store/elementsSlice";

interface Props {
  elementId: string;
}

const PaddingMargin: React.FC<React.PropsWithChildren<Props> & Props> = ({
  elementId,
}) => {
  const dispatch = useAppDispatch();

  function handleBoxSizingInput(
    type: "margin" | "padding",
    direction: "Top" | "Right" | "Bottom" | "Left",
    value: string
  ) {
    const style: IStyle = {
      name: `${type}${direction}`,
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
      <label>Padding</label>
      <div className="border-2 border-dashed rounded-lg h-52 relative px-10 py-6 flex justify-center items-center">
        <span className="uppercase tracking-wider text-xs ml-4 mt-2 block absolute top-0 left-0">
          Margin
        </span>
        <input
          type="number"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleBoxSizingInput("margin", "Left", event.target.value)
          }
          className="absolute h-8 w-8 top-1 left-1/2 -ml-4 border text-center"
        />
        <input
          type="number"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleBoxSizingInput("margin", "Top", event.target.value)
          }
          className="absolute h-8 w-8 top-1/2 left-1 -mt-4 border text-center"
        />
        <input
          type="number"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleBoxSizingInput("margin", "Right", event.target.value)
          }
          className="absolute h-8 w-8 top-1/2 right-1 -mt-4 border text-center"
        />
        <input
          type="number"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleBoxSizingInput("margin", "Bottom", event.target.value)
          }
          className="absolute h-8 w-8 bottom-1 left-1/2 -ml-4 border text-center"
        />
        <div className="h-4/5 w-full border-2 border-blue-400 rounded-lg relative flex justify-center items-center">
          <div className="h-10 w-2/4 bg-slate-200 rounded-lg"></div>
          <input
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleBoxSizingInput("padding", "Top", event.target.value)
            }
            className="absolute h-8 w-8 top-1 left-1/2 -ml-4 border text-center"
          />
          <input
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleBoxSizingInput("padding", "Left", event.target.value)
            }
            className="absolute h-8 w-8 top-1/2 left-1 -mt-4 border text-center"
          />
          <input
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleBoxSizingInput("padding", "Right", event.target.value)
            }
            className="absolute h-8 w-8 top-1/2 right-1 -mt-4 border text-center"
          />
          <input
            type="number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleBoxSizingInput("padding", "Bottom", event.target.value)
            }
            className="absolute h-8 w-8 bottom-1 left-1/2 -ml-4 border text-center"
          />
          <span className="uppercase tracking-wider text-xs absolute bottom-2 right-2">
            Padding
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaddingMargin;
