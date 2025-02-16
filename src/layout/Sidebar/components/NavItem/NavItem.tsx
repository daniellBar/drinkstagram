import { NavLink } from "react-router-dom";
import { NavigationItem } from "../../types";
import Typography from "../../../../components/ui/Typography/Typography";
import { useResponsive } from "../../../../hooks/useResponsive";
import { ItemContainer } from "./styles";
import { Icon } from "../../../../components/ui/Icon/Icon";

interface NavItemProps {
  item: NavigationItem;
}

export const NavItem = ({ item }: NavItemProps) => {
  const { sm: isSmallScreen } = useResponsive();

  return (
    <li onClick={item.onClick}>
      <NavLink to={item.path}>
        {({ isActive }) => (
          <ItemContainer >
            <Icon
              component={isActive ? item.icons.active : item.icons.inActive}
              size="lg"
            />

            {!isSmallScreen && (
              <Typography
                type="subheading-xl"
                weight={isActive ? "bold" : "regular"}
              >
                {item.title}
              </Typography>
            )}
          </ItemContainer>
        )}
      </NavLink>
    </li>
  );
};
