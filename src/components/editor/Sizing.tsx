import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IStyle, updateElement } from "../../store/elementsSlice";
import Input from "../primitives/Input";

interface Props {
  elementId: string;
}

const Sizing: React.FC<React.PropsWithChildren<Props> & Props> = ({
  elementId,
}) => {
  const dispatch = useAppDispatch();

  function handleSizingInput(type: "height" | "width", value: string) {
    const style: IStyle = {
      name: type,
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
      <label>Size</label>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="W"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleSizingInput("width", event.target.value)
          }
        />
        <Input
          label="H"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleSizingInput("height", event.target.value)
          }
        />
      </div>
    </div>
  );
};

export default Sizing;
