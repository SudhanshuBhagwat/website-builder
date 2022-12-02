import { useEffect } from "react";
import Editor from "./components/Editor";
import View from "./components/View";
import { selectElement } from "./store/elementsSlice";
import { store } from "./store/store";
import { FiLayers } from "react-icons/fi";
import Layers from "./components/Layers";

function handleClick(event: MouseEvent) {
  if (
    document.getElementById("component-view")?.contains(event.target as Node)
  ) {
    const node = event.target as HTMLElement;
    const elementId = node.id;
    store.dispatch(selectElement(elementId));
  }
}

function App() {
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex w-full">
      <aside className="flex">
        <nav className="w-14 py-4 bg-slate-200 h-full flex flex-col items-center">
          <FiLayers className="w-6 h-6" />
        </nav>
        <Layers />
      </aside>
      <main className="flex flex-1">
        <div className="bg-slate-50 h-screen flex w-full">
          <div className="h-full w-full flex flex-1 justify-center items-center">
            <View />
          </div>
          <Editor />
        </div>
      </main>
    </div>
  );
}

export default App;
