import { ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import { Favorite, People, ShoppingCart } from "@mui/icons-material";

export default function Actions() {
  return (
    <MyList type="row">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Favorite />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Peopleo />
        </ListItemIcon>
      </ListItemButton>
    </MyList>
  );
}
