import { IComponent } from "../store/elementsSlice";

export const data: IComponent = {
  component: "li",
  id: "cardWrapper",
  styles: [
    {
      name: "boxShadow",
      value: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    },
    {
      name: "display",
      value: "flex",
    },
    {
      name: "gridColumn",
      value: "span 1 / span 1",
    },
  ],
  children: [
    {
      component: "div",
      id: "initialWrapper",
      styles: [
        {
          name: "flexShrink",
          value: "0",
        },
        {
          name: "display",
          value: "flex",
        },
        {
          name: "alignItems",
          value: "center",
        },
        {
          name: "justifyContent",
          value: "center",
        },
        {
          name: "textColor",
          value: "#FFF",
        },
        {
          name: "width",
          value: "4rem",
        },
        {
          name: "fontWeight",
          value: "500",
        },
        {
          name: "fontSize",
          value: "0.875rem",
        },
        {
          name: "backgroundColor",
          value: "#6366F1",
        },
      ],
      children: "SB",
    },
    {
      component: "div",
      id: "infoWrapper",
      styles: [
        {
          name: "display",
          value: "flex",
        },
        {
          name: "flex",
          value: "1 1 0%",
        },
        {
          name: "alignItems",
          value: "center",
        },
        {
          name: "justifyContent",
          value: "space-between",
        },
        {
          name: "borderTop",
          value: "1px",
        },
        {
          name: "borderRight",
          value: "1px",
        },
        {
          name: "borderBottom",
          value: "1px",
        },
        {
          name: "borderColor",
          value: "#e5e7eb",
        },
        {
          name: "backgroundColor",
          value: "#e2e2e2",
        },
      ],
      children: [
        {
          component: "div",
          id: "info",
          styles: [
            {
              name: "flex",
              value: "1 1 0%",
            },
            {
              name: "paddingInline",
              value: "1rem",
            },
            {
              name: "paddingBlock",
              value: "0.5rem",
            },
            {
              name: "fontSize",
              value: "0.875rem",
            },
          ],
          children: [
            {
              component: "p",
              id: "title",
              children: "GraphQL",
              styles: [
                {
                  name: "color",
                  value: "#4b5563",
                },
                {
                  name: "fontweight",
                  value: "500",
                },
              ],
            },
            {
              component: "p",
              id: "readTime",
              children: "10 min read",
              styles: [
                {
                  name: "color",
                  value: "#6b7280",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
