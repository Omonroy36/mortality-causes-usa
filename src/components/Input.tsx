import TextField from '@mui/material/TextField';

interface IProps  {
  label: string;
}

export default function Input({label}: IProps) {
  return (
    <TextField id="outlined-basic" label={label} variant="outlined" size="small"/>
  );
}