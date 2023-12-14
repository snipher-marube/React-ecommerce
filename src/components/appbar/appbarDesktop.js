/** @format */

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {
  return (
    /**
     * appbar container
     * header
     * List
     */
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText
          className="cursor-pointer hover:text-yellow-950"
          primary="Home"
        />
        <ListItemText className="cursor-pointer hover:text-yellow-950" primary="Categories" />
        <ListItemText className="cursor-pointer hover:text-yellow-950" primary="Products" />
        <ListItemText className="cursor-pointer hover:text-yellow-950" primary="Contact Us" />
        <ListItemButton>
            <ListItemIcon>
                <SearchIcon/>
            </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions />
    </AppbarContainer>
  );
}
