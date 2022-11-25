import { useEffect } from "react";
import Editor from "./components/Editor";
import View from "./components/View";
import { selectElement } from "./store/elementsSlice";
import { store } from "./store/store";

function handleClick(event: MouseEvent) {
  const elementId = event.target?.id;
  store.dispatch(selectElement(elementId));
}

function App() {
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="bg-slate-50 h-screen grid grid-cols-3">
      <main className="bg-slate-50 h-full col-span-2 flex justify-center items-center">
        <div>
          <label className="tracking-wider uppercase text-sm font-medium">
            Component
          </label>
          <div className="h-80 aspect-video shadow-xl border flex justify-center items-center">
            <View />
          </div>
        </div>
      </main>
      <Editor />
    </div>
  );
}

export default App;
