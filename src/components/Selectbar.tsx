import React from "react";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Favorite, Query } from "../utils/types";

const years = ["2014", "2015", "2016", "2017", "2018", "2019"];

interface SelectbarProps {
  favoritesList: Favorite[];
  handleQuery: (value: Query) => void;
  query: Query;
}

export default function Selectbar({
  favoritesList,
  handleQuery,
  query,
}: SelectbarProps) {
  const handleChange = (event: SelectChangeEvent) => {
    handleQuery({ [event.target.name]: event.target.value } as any);
  };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl fullWidth>
        <InputLabel id="years">Años</InputLabel>
        <Select
          labelId="years"
          id="select-years"
          label="Años"
          name="year"
          value={query.year}
          onChange={handleChange}
        >
          {years.map((year: string) => (
            <MenuItem value={year} key={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="tags">Favoritos</InputLabel>
        <Select
          labelId="tags"
          id="select-tags"
          label="Favoritos"
          placeholder="Selecciona de Favoritos"
          name="tag"
          value={query.tag}
          onChange={handleChange}
        >
          {favoritesList.map((favorite: Favorite) => (
            <MenuItem value={favorite.slug} key={favorite.id}>
              {favorite.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
