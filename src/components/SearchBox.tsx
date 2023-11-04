import { Card, CardContent } from "@mui/material";
import { MuiInput } from "../assets/global.style";


const SearchBox = () => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <MuiInput fullWidth label="Search Foods" size="small" />
      </CardContent>
    </Card>
  );
};

export default SearchBox;
