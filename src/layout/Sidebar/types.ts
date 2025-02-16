import { IconType } from "../../components/ui/Icon/types";

export interface NavigationItem {
  title: string;
  icons: { active: IconType; inActive: IconType };
  path: string;
  children?: NavigationItem[];
  onClick?: () => void;
}
