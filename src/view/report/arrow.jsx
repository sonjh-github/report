import React, { useState, Button, Transparent} from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Left({
  children,
  onClick,
}) {
  const [show, setShow] = useState(false);
  return show ? (
    <Button
      onClick={onClick}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {children}
    </Button>
  ) : (
    <Transparent
      onMouseEnter={() => {
        setShow(true);
      }}
    />
  );
}

export function LeftArrow() {
  const { scrollPrev } = React.useContext(VisibilityContext);
  return <Left onClick={() => scrollPrev()}>←</Left>;
}