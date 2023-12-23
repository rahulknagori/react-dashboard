import { Card, CardContent } from "@mui/material";
import { MuiInput } from "../assets/global.style";
import { debounce } from "../utils/helper";

type Props = {
  cb: (searchTerm: string) => void;
};

const SearchBox = ({ cb }: Props) => {
  const debouncedSearch = debounce((searchTerm: string) => {
    cb(searchTerm);
  }, 500);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <MuiInput
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
