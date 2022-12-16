import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { updateElement } from "../../store/elementsSlice";
import Panel from "../primitives/Panel";

interface Props {
  elementId: string;
  value: string;
}

const TextEdit: React.FC<React.PropsWithChildren<Props> & Props> = ({
  elementId,
  value,
}) => {
  const dispatch = useAppDispatch();

  function handleTextUpdate(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      updateElement({
        type: "text",
        elementId: elementId,
        value: event.target.value,
      })
    );
  }

  return (
    <Panel title={"Inner Text"}>
      <div className="px-4">
        <div className="flex items-center px-4 py-2 gap-2 border-2 rounded-lg w-full">
          <span className="text-sm text-slate-500 border-r-2 pr-4">Text</span>
          <input
            type="text"
            className="w-full outline-none mx-2 bg-slate-50"
            value={value}
            onChange={handleTextUpdate}
          />
        </div>
      </div>
    </Panel>
  );
};

export default TextEdit;
