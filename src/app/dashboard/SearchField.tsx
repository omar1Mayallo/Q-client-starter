import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <TextField
      fullWidth
      type="search"
      variant="outlined"
      margin="dense"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        sx: {
          border: "none", // Remove borders
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none", // Remove the outlined border on focus
          },
        },
      }}
      placeholder="Search..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchInput;
