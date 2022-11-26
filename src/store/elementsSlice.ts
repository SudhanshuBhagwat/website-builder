import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { data } from "../data/data";

const SELECTED_STYLE = {
  name: "border",
  value: "2px solid blue",
};

interface ElementsState {
  elements: any;
  selectedElementId: string | undefined;
}

const initialState: ElementsState = {
  elements: data,
  selectedElementId: undefined,
};

function findElement(elementId: string, tree: any): any {
  if (tree.id === elementId) {
    return tree;
  }
  if (Array.isArray(tree.children)) {
    const child = tree.children.find((child: any) =>
      findElement(elementId, child)
    );
    return findElement(elementId, child);
  }
}

function _updateElement(tree: any, elementId: string, value: string): any {
  if (tree.id === elementId) {
    console.log(value);
    if (value.length === 0) {
      tree.children = "Temp";
    } else {
      tree.children = value;
    }
  }
  if (Array.isArray(tree.children)) {
    tree.children.map((child: any) => {
      _updateElement(child, elementId, value);
    });
  }
}

function addStyle(elementId: string, tree: any, style: any): any {
  if (tree.id === elementId) {
    if (tree.styles) {
      tree.styles = [...tree.styles, style];
    } else {
      tree["styles"] = [style];
    }
  }
  if (Array.isArray(tree.children)) {
    tree.children.map((child: any) => {
      addStyle(elementId, child, style);
    });
  }
}

function removeStyle(elementId: string, tree: any, style: any): any {
  if (tree.id === elementId) {
    if (tree.styles) {
      tree.styles = tree.styles.filter(
        (currStyle: any) => currStyle.name !== style.name
      );
    }
  }
  if (Array.isArray(tree.children)) {
    tree.children.map((child: any) => {
      removeStyle(elementId, child, style);
    });
  }
}

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    selectElement: (state, action: PayloadAction<string>) => {
      if (state.selectedElementId) {
        if (state.selectedElementId === action.payload) {
          removeStyle(action.payload, state.elements, SELECTED_STYLE);
          state.selectedElementId = undefined;
        } else {
          removeStyle(state.selectedElementId, state.elements, SELECTED_STYLE);
          addStyle(action.payload, state.elements, SELECTED_STYLE);
          state.selectedElementId = action.payload;
        }
      } else {
        addStyle(action.payload, state.elements, SELECTED_STYLE);
        state.selectedElementId = action.payload;
      }
    },
    updateElement: (
      state,
      action: PayloadAction<{
        type: "text" | "style";
        payload: { elementId: string; value: string };
      }>
    ) => {
      if (action.payload.type === "text") {
        _updateElement(
          state.elements,
          action.payload.payload.elementId,
          action.payload.payload.value
        );
      }
    },
  },
});

export const { selectElement, updateElement } = elementsSlice.actions;

export const selectElements = (state: RootState) => state.elements.elements;
export const getSelectedElement = ({ elements }: RootState) => {
  if (elements.selectedElementId) {
    const element = findElement(elements.selectedElementId, elements.elements);
    return element;
  }
  return undefined;
};

export default elementsSlice.reducer;
