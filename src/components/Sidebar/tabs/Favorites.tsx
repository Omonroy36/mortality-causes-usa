import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import OptionList from "../OptionList";
import { Favorite } from "../../../utils/types";

interface FavoritesProps {
  favoritesList: Favorite[];
  deleteFavorite: (value: Favorite) => void;
}

export default function Favorites({
  favoritesList,
  deleteFavorite,
}: FavoritesProps) {
  return (
    <Stack direction="column" spacing={2}>
      <Box>
        <OptionList list={favoritesList} handleFavorite={deleteFavorite} />
      </Box>
    </Stack>
  );
}
