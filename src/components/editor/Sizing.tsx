import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IStyle, updateElement } from "../../store/elementsSlice";
import Input from "../primitives/Input";
import Panel from "../primitives/Panel";

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
    <Panel title={"Sizing"}>
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
    </Panel>
  );
};

export default Sizing;
