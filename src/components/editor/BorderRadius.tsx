import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IStyle, updateElement } from "../../store/elementsSlice";
import Input from "../primitives/Input";

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
        <Input
          label="TL"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleBorderRadiusInput("TopLeft", event.target.value)
          }
        />
        <Input
          label="TR"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleBorderRadiusInput("TopRight", event.target.value)
          }
        />
        <Input
          label="BL"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleBorderRadiusInput("BottomLeft", event.target.value)
          }
        />
        <Input
          label="BR"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleBorderRadiusInput("BottomRight", event.target.value)
          }
        />
      </div>
    </div>
  );
};

export default BorderRadius;
