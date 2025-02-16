import { navItems } from "./consts";
import { NavItem } from "./components/NavItem/NavItem";
import { SidebarContainer, NavList } from "./styles";
import { Logo } from "./components/Logo/Logo";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo />
      <nav>
        <NavList>
          {navItems.map((item, idx) => {
            return <NavItem item={item} key={idx} />;
          })}
        </NavList>
      </nav>
    </SidebarContainer>
  );
};
