import { useAppDispatch } from "../../hooks/redux";
import { addElement } from "../../store/elementsSlice";

const AvailableElements = ["div"];

const Elements = () => {
  const dispatch = useAppDispatch();

  function addElementHandler(element: any) {
    dispatch(
      addElement({
        element,
        parent: undefined,
      })
    );
  }

  return (
    <div className="w-60 border-r">
      <h2 className="px-4 py-3 border-b uppercase tracking-wider font-medium">
        Elements
      </h2>
      <div className="px-4 py-4">
        {AvailableElements.map((element) => (
          <button
            key={element}
            className="h-14 w-14 rounded-md border uppercase tracking-wide"
            onClick={() => addElementHandler(element)}
          >
            {element}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Elements;
