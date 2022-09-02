import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function OptionList () {
    return <List dense>
    {[1,2,3].map(element => 
      <ListItem
        key={element}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <FavoriteIcon />
          </IconButton>
        }
      >
        List item
      </ListItem>
    )}
  </List>
}