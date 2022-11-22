interface Element {
  id: string;
  el: keyof JSX.IntrinsicElements;
  children?: Element[];
}

export const Div: Element = {
  id: "1",
  el: "div",
  children: [],
};
