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
      <h2 className="py-2 px-4 text-sm border-y uppercase tracking-wider font-medium">
        <label>Size</label>
      </h2>
      <div className="grid grid-cols-2 gap-4 px-4">
        {Object.keys(Sizes).map((name) => (
          <Input
            key={name}
            label={Sizes[name]}
            value={getStyleValue(name)}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleSizingInput(name, event.target.value)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Sizing;
