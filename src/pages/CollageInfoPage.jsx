import { useCallback, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CollageListTable from "../components/CollageListTable";
import SearchCollage from "../components/SearchCollage";
import { nextPage } from "../store/collageDataSlice";
import "../styles/globalStyles.css";

export default function CollageInfoPage() {
  const dispatch = useDispatch();
  const collageData = useSelector((state) => state.allCollageDetails.listData);

  const searchCollageData = useSelector(
    (state) => state.allCollageDetails.searchData
  );
  const currentPage = useSelector(
    (state) => state.allCollageDetails.currentPage
  );

  const itemsPerPage = useSelector(
    (state) => state.allCollageDetails.itemsPerPage
  );

  const startIndex = 0;
  const endIndex = currentPage * itemsPerPage;

  const listData = searchCollageData.length
    ? searchCollageData
    : collageData.slice(startIndex, endIndex);

  const fetchMoreData = useCallback(() => {
    dispatch(nextPage());
  }, [dispatch]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMoreData();
    }
  }, [fetchMoreData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="task1BgColor">
      <Card>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <SearchCollage />
          </div>
          <div style={{ padding: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              List of Collages
            </Typography>
            <CollageListTable listData={listData} collageData={collageData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
