import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tag, Favorite } from "../../utils/types";

interface OptionListProps {
  list: Tag[];
  handleFavorite: (value: Favorite) => void;
}

export default function OptionList({ list, handleFavorite }: OptionListProps) {
  return (
    <List>
      {list &&
        list.map((element) => (
          <ListItem
            key={element.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleFavorite(element)}
              >
                <FavoriteIcon />
              </IconButton>
            }
          >
            {element.name.charAt(0).toUpperCase() + element.name.slice(1)}
          </ListItem>
        ))}
    </List>
  );
}
