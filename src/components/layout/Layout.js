import React from "react";
import styled from "styled-components";
import { ProjectCard, Logo, ThemeButton, Divider, Bell } from "..";
import "./Layout.scss";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const GridItem = styled.div`
  // border: 1px solid white;
  margin: 0;
  padding: 0;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--background-color-primary)"};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: ${({ col }) => (col ? col : "1")};
  grid-row: ${({ row }) => (row ? row : "1")};
`;

const LogoItem = styled(GridItem)``;
const NavItem = styled(GridItem)``;
const DividerItem = styled(GridItem)``;
const ProjectsItem = styled(GridItem)`
  margin: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
`;
const ProjectItem = styled(GridItem)`
  @media (min-width: 320px) {
    grid-column: span 4;
    grid-row: ${({ nth }) => nth};
  }

  @media (min-width: 720px) {
    grid-column: ${({ nth }) => (nth % 2 === 0 ? "3/5" : "1/3")};
    grid-row: ${({ nth }) => Math.floor((nth - 1) / 2 + 1)};
  }

  @media (min-width: 1280px) {
    grid-column: ${({ nth }) => {
      switch (nth % 4) {
        case 0:
          return "4/5";
        case 1:
          return "3/4";
        case 2:
          return "2/3";
        case 3:
          return "1/2";
        default:
          return "span 4";
      }
    }};
    grid-row: ${({ nth }) => Math.floor((nth - 1) / 4 + 1)};
  }
`;
const FooterItem = styled(GridItem)``;

const Div = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
`;

const CTA = styled.div``;

const Layout = () => {
  const logoElementRef = React.useRef();
  const observer = React.useRef();

  React.useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver(handleIntersect, options);
    observer.current.observe(logoElementRef.current);
  }, []);

  function handleIntersect(entries, observer) {
    if (!entries[0].isIntersecting && entries[0].intersectionRatio === 0) {
      document.querySelector("#oioi").classList.add("cta-visible");
      document.querySelector(".nav-buttons").classList.remove("visible");
    } else {
      document.querySelector("#oioi").classList.remove("cta-visible");
      document.querySelector(".nav-buttons").classList.add("visible");
    }
  }

  return (
    <>
      <Grid>
        <LogoItem
          bgColor="var(--background-color-secondary)"
          col="1/5"
          ref={logoElementRef}
        >
          <Logo />
        </LogoItem>

        <NavItem bgColor="var(--background-color-secondary)" col="5/13">
          <div className="nav-buttons">
            <ThemeButton />
            <Bell />
          </div>
          <CTA id="oioi" className="cta"></CTA>
        </NavItem>

        <DividerItem col="span 12" row="2">
          <Divider />
        </DividerItem>

        <GridItem col="span 12" row="3">
          <h2 style={{ color: "white" }}>PROJECTS</h2>
        </GridItem>

        <ProjectsItem col="span 12" row="4">
          <ProjectItem nth="1">
            <ProjectCard />
          </ProjectItem>
          <ProjectItem nth="2">
            <ProjectCard />
          </ProjectItem>
          <ProjectItem nth="3">
            <ProjectCard />
          </ProjectItem>
          <ProjectItem nth="4">
            <ProjectCard />
          </ProjectItem>
        </ProjectsItem>

        <FooterItem col="span 12" row="5">
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </div>
        </FooterItem>
      </Grid>
    </>
  );
};

export default Layout;
