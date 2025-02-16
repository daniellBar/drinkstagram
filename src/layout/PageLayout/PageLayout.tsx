import { Sidebar } from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Container, PageContent } from "./styles";

export const PageLayout = () => {
  return (
    <Container>
      <Sidebar />
      <PageContent>
        <Outlet />
      </PageContent>
    </Container>
  );
};
