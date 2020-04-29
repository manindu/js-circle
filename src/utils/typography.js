import Typography from "typography";
import altonTheme from "typography-theme-alton";

altonTheme.googleFonts = [
  {
    name: "Poppins",
    styles: ["700", "600", "500", "400", "200"],
  },
  {
    name: "Work Sans",
    styles: ["700", "600", "500", "400", "200"],
  },
];
altonTheme.headerFontFamily = ["Poppins"];
altonTheme.bodyFontFamily = ["Work Sans"];
altonTheme.baseFontSize = "16px";
altonTheme.bodyWeight = "400";

const typography = new Typography(altonTheme);

export default typography;
export const rhythm = typography.rhythm;
