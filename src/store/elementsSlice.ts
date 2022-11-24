import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { data } from "../data/data";

interface ElementsState {
  elements: any;
}

const initialState: ElementsState = {
  elements: data,
};

function findElement(elementId: string, elements: any): any {
  console.log(elements.id, elementId);
  if (elements.id === elementId) return elements;
  if (elements.children) {
    for (const element of elements.children) {
      return findElement(elementId, element.children);
    }
  }
}

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    selectElement: (state, action: PayloadAction<string>) => {
      const currElement = findElement(action.payload, state.elements);
      console.log(currElement);
    },
  },
});

export const { selectElement } = elementsSlice.actions;

export const selectElements = (state: RootState) => state.elements.elements;

export default elementsSlice.reducer;
