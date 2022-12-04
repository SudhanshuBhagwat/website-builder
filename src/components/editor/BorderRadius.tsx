import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IStyle, updateElement } from "../../store/elementsSlice";
import Input from "../primitives/Input";

const BorderRadii: Record<string, string> = {
  borderTopLeftRadius: "TL",
  borderTopRightRadius: "TR",
  borderBottomLeftRadius: "BL",
  borderBottomRightRadius: "BR",
};

interface Props {
  elementId: string;
  styles: IStyle[];
}

const BorderRadius: React.FC<React.PropsWithChildren<Props> & Props> = ({
  elementId,
  styles,
}) => {
  const dispatch = useAppDispatch();
  const borderRadiusStyles = styles.filter((style) =>
    Object.keys(BorderRadii).includes(style.name)
  );

  function getStyleValue(name: string) {
    return borderRadiusStyles
      .find((style) => style.name === name)
      ?.value.replace("px", "");
  }

  function handleBorderRadiusInput(name: string, value: string) {
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
      <label>Border Radius</label>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(BorderRadii).map((name) => (
          <Input
            key={name}
            label={BorderRadii[name]}
            value={getStyleValue(name)}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleBorderRadiusInput(name, event.target.value)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default BorderRadius;
