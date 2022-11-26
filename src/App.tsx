import { useEffect } from "react";
import Editor from "./components/Editor";
import View from "./components/View";
import { selectElement } from "./store/elementsSlice";
import { store } from "./store/store";

function handleClick(event: MouseEvent) {
  if (document.getElementById("component-view")?.contains(event.target)) {
    const elementId = event.target?.id;
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
    <div className="bg-slate-50 h-screen grid grid-cols-3">
      <main className="bg-slate-50 h-full col-span-2 flex justify-center items-center">
        <View />
      </main>
      <Editor />
    </div>
  );
}

export default App;
