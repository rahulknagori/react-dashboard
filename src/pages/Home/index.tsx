import { useState } from "react";
import { Grid, Box, FormLabel } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { MuiIconBtn, MuiInput } from "../../assets/global.style";
import HomeTable from "./HomeTable";
import SearchBox from "../../components/SearchBox";
import Sidebar from "../../components/Sidebar";

const filterData = [
  {
    id: 1,
    label: "Calorie",
  },
  {
    id: 1,
    label: "Fat",
  },
];

const Home: React.FC = () => {
  const [openRSidebar, setOpenRSidebar] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const onFilterBtnClick =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpenRSidebar({
        ...openRSidebar,
        [anchor]: open,
      });
    };

  return (
    <div>
      <Grid container alignItems={"end"} spacing={2} mb={2}>
        <Grid item xs={11}>
          <SearchBox />
        </Grid>
        <Grid item xs={1}>
          <MuiIconBtn
            onClick={onFilterBtnClick("right", true)}
            sx={{ float: "right" }}
            variant="contained"
          >
            <FilterAltIcon />
          </MuiIconBtn>
        </Grid>
      </Grid>
      <HomeTable />
      <Sidebar
        openSidebar={openRSidebar}
        toggleDrawer={onFilterBtnClick}
        width={300}
      >
        <Box p={2}>
          {filterData.map((item: (typeof filterData)[0]) => {
            return (
              <>
                <FormLabel component={"legend"} sx={{ mb: 1, fontWeight: 600 }}>
                  {item.label}
                </FormLabel>
                <MuiInput
                  sx={{ mb: 2 }}
                  label={`Filter ${item.label}`}
                  fullWidth
                  size="small"
                />
              </>
            );
          })}
        </Box>
      </Sidebar>
    </div>
  );
};

export default Home;
