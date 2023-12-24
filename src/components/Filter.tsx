import { Dispatch, Fragment, SetStateAction, ChangeEvent } from "react";
import { Box, FormLabel, Button } from "@mui/material";
import { FilterT } from "../utils/types/filterTypes";
import { MuiInput } from "../assets/global.style";

const filterData = [
  {
    id: 1,
    label: "Country",
  },
  {
    id: 2,
    label: "Item",
  },
];

type Props = {
  onFilterChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    label: string
  ) => void;
  onApplyFilter: () => void;
  setSelectedFilters: Dispatch<SetStateAction<FilterT>>;
  selectedFilters: FilterT;
  refetchApi: () => void;
};

const Filter = ({
  onApplyFilter,
  onFilterChange,
  selectedFilters,
  setSelectedFilters,
  refetchApi,
}: Props) => {
  const resetFilters = () => {
    setSelectedFilters({
      country: "",
      item: "",
    });
    refetchApi();
  };

  return (
    <Box p={2}>
      {filterData.map((item: (typeof filterData)[0]) => {
        const label: keyof FilterT = item.label.toLowerCase() as keyof FilterT;
        return (
          <Fragment key={item.id}>
            <FormLabel component={"legend"} sx={{ mb: 1, fontWeight: 600 }}>
              {item.label}
            </FormLabel>
            <MuiInput
              sx={{ mb: 2 }}
              value={selectedFilters[label] as keyof FilterT}
              onChange={(e) => onFilterChange(e, label)}
              label={`Filter ${item.label}`}
              fullWidth
              size="small"
            />
          </Fragment>
        );
      })}
      <Box display={"flex"} justifyContent={"space-between"} mt={1}>
        <Button onClick={resetFilters} color="warning" variant="contained">
          Reset Filters
        </Button>
        <Button onClick={onApplyFilter} variant="contained">
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default Filter;
