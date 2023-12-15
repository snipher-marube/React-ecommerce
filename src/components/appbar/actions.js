import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  MyList,
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
} from "../../styles/appbar";
import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { Colors } from "../../styles/theme";

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <ListItemButton className="justify-center">
          <ListItemIcon
            className="flex justify-center"
            sx={{
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCart />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton className="justify-center">
          <ListItemIcon
            className="flex justify-center"
            sx={{
              color: matches && Colors.secondary,
            }}
          >
            <Favorite />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton className="justify-center">
          <ListItemIcon
            className="flex justify-center"
            sx={{
              color: matches && Colors.secondary,
            }}
          >
            <Person />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}
