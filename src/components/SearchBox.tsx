import { useState } from "react";
import { Card, CardContent } from "@mui/material";
import { MuiInput } from "../assets/global.style";

const SearchBox = () => {
  const [value, setValue] = useState<string>("");

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <MuiInput
          value={value}
          onChange={onSearch}
          fullWidth
          label="Search Code"
          size="small"
        />
      </CardContent>
    </Card>
  );
};

export default SearchBox;
