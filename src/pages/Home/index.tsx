import HomeTable from "./HomeTable";
import SearchBox from "../../components/SearchBox";
import { Grid } from "@mui/material";
import { MuiIconBtn } from "../../assets/global.style";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Home: React.FC = () => {
  return (
    <div>
      <Grid container alignItems={"end"} spacing={2} mb={2}>
        <Grid item xs={11}>
          <SearchBox />
        </Grid>
        <Grid item xs={1}>
          <MuiIconBtn sx={{ float: "right" }} variant="contained">
            <FilterAltIcon />
          </MuiIconBtn>
        </Grid>
      </Grid>
      <HomeTable />
    </div>
  );
};

export default Home;
