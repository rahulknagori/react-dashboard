import { Card, CardContent } from "@mui/material";
import { MuiTextField } from "../assets/global.style";

type Props = {};

const SearchBox = (props: Props) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <MuiTextField fullWidth label="Search Foods" size="small" />
      </CardContent>
    </Card>
  );
};

export default SearchBox;
