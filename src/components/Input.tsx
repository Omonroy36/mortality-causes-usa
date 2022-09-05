import TextField from "@mui/material/TextField";

interface IProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, onChange }: IProps) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      onChange={onChange}
    />
  );
}
