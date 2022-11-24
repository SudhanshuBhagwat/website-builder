export const data = {
  component: "li",
  id: "cardWrapper",
  className: "col-span-1 flex shadow-sm rounded-md",
  children: [
    {
      component: "div",
      id: "initialWrapper",
      className:
        "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md",
      styles: [
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
      className:
        "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate",
      children: [
        {
          component: "div",
          id: "info",
          className: "flex-1 px-4 py-2 text-sm truncate",
          children: [
            {
              component: "p",
              id: "title",
              className: "text-gray-900 font-medium hover:text-gray-600",
              children: "GraphQL",
            },
            {
              component: "p",
              id: "readTime",
              className: "text-gray-500",
              children: "10 min read",
            },
          ],
        },
      ],
    },
  ],
};
