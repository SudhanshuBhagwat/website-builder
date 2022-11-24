import { createElement } from "react";

const stylesMap = (styles: any) => {
  let mappedStyles: { [key: string]: string } = {};
  styles.forEach((style: any) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};

export const renderComponent = (config: any) => {
  if (config.component !== "undefined") {
    return createElement(
      config.component,
      {
        id: config.id,
        key: config.id,
        className: config.className ? config.className : null,
        ariaHidden: config.ariaHidden ? config.ariaHidden : null,
        style: config.styles ? stylesMap(config.styles) : null,
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map((c: any) => renderComponent(c)))
    );
  }
};
