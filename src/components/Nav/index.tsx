// External Libraries
import Image from "next/image";
import React from "react";

// Components
import NavItem from "../NavItem";

// Assets
import { Profile, Cart } from "../../styles/icons";

// Stylization
import { Container, Content } from "./styles";

const Nav: React.FC = () => {
  return (
    <Container>
      <Content>
        <Image src="/icons/logo.svg" alt="Logo" width={126} height={34} />

        <ul>
          {/* <MenuItem url="/notifications" text="Notifications" icon={BellIcon} /> */}
          <NavItem url="/discovery" text="Discovery" />
          <NavItem url="/about" text="About" />
          <NavItem url="/contact" text="Contact us" />
        </ul>

        <ul>
          <NavItem url="/profile" icon={Profile} />
          <NavItem url="/cart" icon={Cart} />
        </ul>
      </Content>
    </Container>
  );
};

export default Nav;
