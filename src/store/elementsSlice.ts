import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
// import { data } from "../data/data";

const SELECTED_STYLE = {
  name: "border",
  value: "2px solid blue",
};

type UPDATE_ELEMENT_TYPE = "text" | "style";

export interface IComponent {
  component: keyof HTMLElementTagNameMap;
  id: string;
  styles: IStyle[];
  children: IComponent[] | string;
}

export interface IStyle {
  name: string;
  value: string;
}

interface ElementsState {
  elements: any;
  selectedElementId: string | undefined;
}

const initialState: ElementsState = {
  elements: undefined,
  selectedElementId: undefined,
};

function createPlaceholderElement(element: keyof HTMLElementTagNameMap) {
  return {
    component: element,
    id: new Date().toISOString(),
    styles: [
      {
        name: "height",
        value: "20px",
      },
      {
        name: "width",
        value: "20px",
      },
      {
        name: "border",
        value: "1px solid gray",
      },
    ],
    children: [],
  };
}

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

function _addElement(
  element: keyof HTMLElementTagNameMap,
  parent: IComponent,
  tree: IComponent
) {
  if (tree.id === parent.id) {
    if (Array.isArray(tree.children)) {
      tree.children.push(createPlaceholderElement(element));
      console.log(tree);
    }
  }
  if (Array.isArray(tree.children)) {
    tree.children.map((child: IComponent) => {
      _addElement(element, parent, child);
    });
  }
}

function updateText(treeNode: IComponent, value: string) {
  if (value.length === 0) {
    treeNode.children = "Temp";
  } else {
    treeNode.children = value;
  }
}

function updateStyles(tree: IComponent, styles: IStyle) {
  const currStyle = tree.styles.find((style) => style.name === styles.name);
  if (currStyle) {
    currStyle.value = `${styles.value}px`;
  } else {
    tree.styles.push({
      name: styles.name,
      value: `${styles.value}px`,
    });
  }
}

function _updateElement(
  tree: IComponent,
  type: UPDATE_ELEMENT_TYPE,
  elementId: string,
  value: string | IStyle
) {
  if (tree.id === elementId) {
    switch (type) {
      case "text":
        updateText(tree, value as string);
        break;
      case "style":
        updateStyles(tree, value as IStyle);
        break;
      default:
        console.error("No such element");
        break;
    }
  }
  if (Array.isArray(tree.children)) {
    tree.children.map((child: IComponent) => {
      _updateElement(child, type, elementId, value);
    });
  }
}

function addStyle(elementId: string, tree: IComponent, style: IStyle) {
  if (tree.id === elementId) {
    if (tree.styles) {
      tree.styles = [...tree.styles, style];
    } else {
      tree["styles"] = [style];
    }
  }
  if (Array.isArray(tree.children)) {
    tree.children.map((child: IComponent) => {
      addStyle(elementId, child, style);
    });
  }
}

function removeStyle(elementId: string, tree: IComponent, style: IStyle) {
  if (tree.id === elementId) {
    if (tree.styles) {
      if (style.name === "border") {
        const hasBorder = tree.styles.find(
          (currStyle: IStyle) => currStyle.name === "border"
        );
        if (hasBorder) {
          tree.styles = tree.styles.map((currStyle: IStyle) => {
            if (currStyle.name === "border") {
              return {
                name: "border",
                value: "1px solid gray",
              };
            }
            return currStyle;
          });
          return;
        }
      }
      tree.styles = tree.styles.filter(
        (currStyle: IStyle) => currStyle.name !== style.name
      );
    }
  }
  if (Array.isArray(tree.children)) {
    tree.children.map((child: IComponent) => {
      removeStyle(elementId, child, style);
    });
  }
}

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addElement: (
      state,
      action: PayloadAction<{
        element: keyof HTMLElementTagNameMap;
        parent: IComponent | undefined;
      }>
    ) => {
      if (!action.payload.parent || !state.elements) {
        state.elements = createPlaceholderElement(action.payload.element);
      } else {
        _addElement(
          action.payload.element,
          action.payload.parent,
          state.elements
        );
      }
    },
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
        elementId: string;
        value: string | IStyle;
        type: UPDATE_ELEMENT_TYPE;
      }>
    ) => {
      _updateElement(
        state.elements,
        action.payload.type,
        action.payload.elementId,
        action.payload.value
      );
    },
  },
});

export const { addElement, selectElement, updateElement } =
  elementsSlice.actions;

export const selectElements = (state: RootState) => state.elements.elements;
export const getSelectedElement = ({ elements }: RootState) => {
  if (elements.selectedElementId) {
    const element = findElement(elements.selectedElementId, elements.elements);
    return element;
  }
  return undefined;
};

export default elementsSlice.reducer;
