import React, { FunctionComponent, useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { filterOn } from "./Content";

interface Item {
  name: string;
  value: string;
}

interface Props {
  label: string;
  items: Item[];
}

const DropDown: FunctionComponent<Props> = ({ items, label }: Props) => {
  const [name, setName] = React.useState("");
  const context = useContext(filterOn);

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setName(event.target.value);
    if (label === "Batch") {
      context.setFilters({ ...context.filters, Batch: event.target.value.toString() });
    } else if (label === "Year") {
      context.setFilters({ ...context.filters, Year: event.target.value.toString() });
    } else {
      context.setFilters({ ...context.filters, Dept: event.target.value.toString() });
    }
  };

  return (
    <div>
      <FormControl
        sx={{
          minWidth: 120,
          m: 1,
          // border: 1,
          borderRadius: 2,
        }}
        size="small"
        className="border border-black border-1 dark:border-white dark:text-white dark:bg-darkTheme"
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          label={label}
          onChange={handleChange}
        >
          {items.map((val, i) => (
            <MenuItem key={i} value={val.value}>
              {val.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
