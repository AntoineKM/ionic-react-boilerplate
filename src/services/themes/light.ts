import { Theme } from "../../types/themes";

const light: Theme = {
  id: 0,
  colors: {
    layout: {
      darkest: "rgb(231, 230, 229)",
      darker: "rgb(225, 224, 223)",
      dark: "rgb(180, 180, 179)",
      light: "rgb(225, 225, 225)",
      lighter: "rgb(219, 219, 219)",
      lightest: "rgb(210, 210, 210)",
    },
    text: {
      lightest: "rgb(0, 0, 0)",
      lighter: "rgb(55, 55, 55)",
      light: "rgb(105, 105, 105)",
      dark: "rgb(120, 120, 120)",
      darker: "rgb(155, 155, 155)",
      darkest: "rgb(225, 224, 223)",
    },
    accent: {
      light: "rgb(0, 0, 0)",
      red: "rgb(214, 48, 49)",
      green: "rgb(38, 222, 129)",
    },
  },
};

export default light;
