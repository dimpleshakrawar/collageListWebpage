import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { handleSortData } from "../store/collageDataSlice";

const CollageListTable = ({ listData, collageData }) => {
  const dispatch = useDispatch();
  const ascendingState = useSelector(
    (state) => state.allCollageDetails.ascendingOrderState
  );

  return (
    <TableContainer component={Paper} style={{ position: "relative" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <div className="iconBtn">
                <p> CD Rank </p>
                <IconButton onClick={() => dispatch(handleSortData("id"))}>
                  {ascendingState ? (
                    <ArrowUpward sx={{ color: "white" }} />
                  ) : (
                    <ArrowDownward sx={{ color: "white" }} />
                  )}
                </IconButton>
              </div>
            </TableCell>
            <TableCell>Collages</TableCell>
            <TableCell>
              <div className="iconBtn">
                Course Fees
                <IconButton onClick={() => dispatch(handleSortData("fees"))}>
                  {ascendingState ? (
                    <ArrowUpward sx={{ color: "white" }} />
                  ) : (
                    <ArrowDownward sx={{ color: "white" }} />
                  )}
                </IconButton>
              </div>
            </TableCell>
            <TableCell>Placement</TableCell>
            <TableCell>
              <div className="iconBtn">
                User Reviews
                <IconButton onClick={() => dispatch(handleSortData("review"))}>
                  {ascendingState ? (
                    <ArrowUpward sx={{ color: "white" }} />
                  ) : (
                    <ArrowDownward sx={{ color: "white" }} />
                  )}
                </IconButton>
              </div>
            </TableCell>
            <TableCell>Ranking</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!listData.length && (
            <TableRow>
              <TableCell colSpan={5}>No data found</TableCell>
            </TableRow>
          )}

          {listData.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ width: "10%" }}>#{row.id} </TableCell>
              <TableCell sx={{ width: "35%" }}>
                <div className="tableCollageNameCell">
                  <img src={row.collageLogo} alt="image" className="image" />
                  <div>
                    <p className="collageNameText">{row.collageDetails.name}</p>
                    <p className="collageLocation">
                      {row.collageDetails.place} | {row.collageDetails.place}
                    </p>
                    <div className="courseDetailsContainer">
                      <Divider
                        sx={{
                          height: 40,
                          borderRightWidth: 2,
                          backgroundColor: "#ff9b48",
                        }}
                        orientation="vertical"
                      />
                      <div>
                        <p className="courseNameText">
                          {row.collageDetails.courses[0]}
                        </p>
                        <p>{row.collageDetails.score}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="actionBtnContainer">
                  <div>
                    <IconButton aria-label="delete" size="small">
                      <ArrowForwardIcon
                        sx={{ fontSize: "15px", color: "#ff9b48" }}
                      />
                    </IconButton>
                    <span style={{ fontSize: "12px" }}>Apply Now</span>
                  </div>
                  <div>
                    <IconButton aria-label="delete" size="small">
                      <DownloadIcon
                        sx={{ fontSize: "15px", color: "#4bc6e7" }}
                      />
                    </IconButton>
                    <span style={{ fontSize: "12px" }}>Download Brochure</span>
                  </div>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                        />
                      }
                      label="Add To Compare"
                    />
                  </div>
                </div>
              </TableCell>

              <TableCell sx={{ width: "13%" }}>
                <div>
                  <p className="collageNameText">{row.courseFees.fees}</p>
                  <p className="courseDetails">{row.courseFees.degree}</p>
                  <p className="courseDetails">
                    {row.courseFees.coursePerYearFees}
                  </p>
                  <div style={{ color: "#ff9b48", fontWeight: "600" }}>
                    <IconButton aria-label="delete" size="small">
                      <CompareArrowsIcon
                        sx={{ fontSize: "13px", color: "#ff9b48" }}
                      />
                    </IconButton>
                    <span style={{ fontSize: "12px" }}>Compare Fees</span>
                  </div>
                </div>
              </TableCell>

              <TableCell sx={{ width: "15%" }}>
                <p className="collageNameText">
                  {row.placement.averagePackageAmount}
                </p>
                <p className="packageDetails">Average Package</p>
                <p className="collageNameText">
                  {row.placement.highestPackageAmount}
                </p>
                <p className="packageDetails">Highest Package</p>
                <div style={{ color: "#ff9b48", fontWeight: "600" }}>
                  <IconButton aria-label="delete" size="small">
                    <CompareArrowsIcon
                      sx={{ fontSize: "13px", color: "#ff9b48" }}
                    />
                  </IconButton>
                  <span style={{ fontSize: "12px" }}>Compare Placement</span>
                </div>
              </TableCell>

              <TableCell sx={{ width: "13%" }}>
                <div
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <div className="circle" />
                  <p className="text">{row.review.review}/10</p>
                </div>
                <p className="courseDetails">{`Based on ${row.review.totalUser} User Reviews`}</p>
                <div className="reviewTagContainer">
                  <DoneIcon sx={{ fontSize: "13px", color: "#e0959e" }} />
                  <p className="reviewAbout">
                    {`Best in ${row.review.category}`}{" "}
                  </p>
                  <KeyboardArrowDownIcon
                    sx={{ fontSize: "13px", color: "#e0959e" }}
                  />
                </div>
              </TableCell>

              <TableCell sx={{ width: "13%" }}>
                <p className="text">
                  {row.rank.rank.match(/^\d+/)[0]}
                  <span
                    style={{
                      position: "relative",
                      top: "-0.5em",
                      fontSize: "0.7em",
                    }}
                  >
                    {row.rank.rank.replace(/^\d+/, "")}
                  </span>
                  /
                  <span
                    style={{ color: "#ff9b48" }}
                  >{`${row.rank.totalRank}`}</span>{" "}
                  in India
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1px" }}
                >
                  <img
                    src={row.rank.newsChannelLogo}
                    className="image"
                    alt="image"
                  />
                  <p className="text">{row.rank.year}</p>
                </div>
                <div className="logoContainer">
                  <p> +9 more</p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        {listData.length === collageData.length && (
          <h2 className="messageText">Yay!! All Data Displayed!</h2>
        )}
      </div>
    </TableContainer>
  );
};

export default CollageListTable;

CollageListTable.propTypes = {
  listData: PropTypes.array,
  collageData: PropTypes.array,
};
