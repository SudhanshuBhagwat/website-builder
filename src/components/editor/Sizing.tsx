import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IStyle, updateElement } from "../../store/elementsSlice";
import Input from "../primitives/Input";

const Sizes: Record<string, string> = {
  width: "W",
  height: "H",
};

interface Props {
  elementId: string;
  styles: IStyle[];
}

const Sizing: React.FC<React.PropsWithChildren<Props> & Props> = ({
  elementId,
  styles,
}) => {
  const dispatch = useAppDispatch();

  const borderRadiusStyles = styles.filter((style) =>
    Object.keys(Sizes).includes(style.name)
  );

  function getStyleValue(name: string) {
    return borderRadiusStyles
      .find((style) => style.name === name)
      ?.value.replace("px", "");
  }

  function handleSizingInput(name: string, value: string) {
    const style: IStyle = {
      name,
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
        {Object.keys(Sizes).map((name) => (
          <Input
            label={Sizes[name]}
            value={getStyleValue(name)}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleSizingInput("width", event.target.value)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Sizing;
