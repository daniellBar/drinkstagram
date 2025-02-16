import { CLIENT_ROUTES } from "../../router/routes";
import { NavigationItem } from "./types";

export const navItems: NavigationItem[] = [
  {
    title: "Home",
    icons: { active: "HomeActive", inActive: "HomeInactive" },
    path: CLIENT_ROUTES.Main,
  },
  {
    title: "Create",
    icons: { active: "Create", inActive: "Create" },
    path: CLIENT_ROUTES.CreateDrink,
  },
];
