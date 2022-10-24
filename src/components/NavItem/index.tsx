// External Libraries
import Link from "next/link";
import React from "react";

// Stylization
import { ListItem, Anchor, IconContainer, Text } from "./styles";

interface NavItemProps {
  url?: string;
  text?: string;
  icon?: any;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ url, text, icon, onClick }) => {
  function renderContent() {
    return (
      <Anchor>
        {icon && <IconContainer>{icon}</IconContainer>}
        {text && <Text>{text}</Text>}
      </Anchor>
    );
  }

  return (
    <ListItem onClick={onClick}>
      {url ? <Link href={url}>{renderContent()}</Link> : renderContent()}
    </ListItem>
  );
};

export default NavItem;
