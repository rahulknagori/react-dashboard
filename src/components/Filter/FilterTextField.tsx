import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { MuiInput } from "../../assets/global.style";
import { FilterT } from "../../utils/types/filterTypes";

type Props = {
  formLabel: string;
  selectedFilters: FilterT;
  setSelectedFilters: Dispatch<SetStateAction<FilterT>>;
};

const FilterTextField = ({
  formLabel,
  selectedFilters,
  setSelectedFilters,
}: Props) => {
  const label: keyof FilterT = formLabel.toLowerCase() as keyof FilterT;

  const onFilterChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    label: string
  ) => {
    const value: string = e.target.value.toLowerCase();
    if (label === "country" || label === "item") {
      const filters = { ...selectedFilters };
      filters[label] = value;
      setSelectedFilters(filters);
    }
  };
  return (
    <MuiInput
      sx={{ mb: 2 }}
      value={selectedFilters[label] as keyof FilterT}
      onChange={(e) => onFilterChange(e, label)}
      label={`Filter ${formLabel}`}
      fullWidth
      size="small"
    />
  );
};

export default FilterTextField;
