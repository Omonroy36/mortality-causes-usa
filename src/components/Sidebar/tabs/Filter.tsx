import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Input from "../../Input";
import OptionList from "../OptionList";
import { Tag, Favorite } from "../../../utils/types";

interface FilterProps {
  addFavorite: (value: Favorite) => void;
}

export default function Filter({ addFavorite }: FilterProps) {
  const [tags, setTags] = useState<Tag[]>([]);

  const getTagsBy = (name: string) => {
    fetch(`${process.env.REACT_APP_API_URL}/tag/getBy?name=${name}`)
      .then((res) => res.json())
      .then((data) => setTags(data.results))
      .catch((error) => console.log(error));
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") setTags([]);
    else getTagsBy(e.target.value);
  };

  return (
    <Stack direction="column" spacing={2}>
      <Box>
        <Input label="Causes" onChange={onChangeInput} />
      </Box>
      <Box>
        <OptionList list={tags} handleFavorite={addFavorite} />
      </Box>
    </Stack>
  );
}
