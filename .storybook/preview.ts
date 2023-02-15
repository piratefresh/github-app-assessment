export const parameters = {
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#010409",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
