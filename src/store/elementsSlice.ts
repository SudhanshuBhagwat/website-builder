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
  if (tree.id === elementId) return tree;
  if (Array.isArray(tree.children)) {
    const newElements = tree.children.map((child: any) => {
      return findElement(elementId, child);
    });

    return {
      ...tree,
      children: newElements,
    };
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
  },
});

export const { selectElement } = elementsSlice.actions;

export const selectElements = (state: RootState) => state.elements.elements;

export default elementsSlice.reducer;
