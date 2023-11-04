import * as React from "react";
import { Box, Drawer } from "@mui/material";

type Anchor = "top" | "left" | "bottom" | "right";

type Props = {
  openSidebar: any;
  width?: number;
  children: React.ReactNode;
  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export default function TemporaryDrawer({
  openSidebar,
  width,
  children,
  toggleDrawer,
}: Props) {
  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : width || 250,
      }}
      role="presentation"
    >
      {children}
    </Box>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            sx={{
              ".MuiPaper-root": {
                mt: 8.1,
              },
            }}
            anchor={anchor}
            open={openSidebar[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
