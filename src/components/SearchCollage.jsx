import { Paper, IconButton, Divider, InputBase } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { handleSearchPrescription } from "../store/collageDataSlice";

export default function SearchCollage() {
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "5px", backgroundColor: "#ff9b48" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 600,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by Collage Names"
          inputProps={{ "aria-label": "Search by Collage Names" }}
          onChange={(e) => dispatch(handleSearchPrescription(e.target.value))}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
