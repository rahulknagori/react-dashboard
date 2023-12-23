import { Fragment, useEffect, useState } from "react";
import { Grid, Box, FormLabel, Button, CircularProgress } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { CloudUpload } from "@mui/icons-material";
import { MuiIconBtn, MuiInput } from "../../assets/global.style";
import HomeTable from "./HomeTable";
import SearchBox from "../../components/SearchBox";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { pageMetaDataT, ProductT } from "../../utils/types/productTypes";

const filterData = [
  {
    id: 1,
    label: "Country",
  },
  {
    id: 1,
    label: "Item",
  },
];

const Home: React.FC = () => {
  const [openRSidebar, setOpenRSidebar] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [products, setProducts] = useState<ProductT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageMetaData, setPageMetaData] = useState<pageMetaDataT>({
    totalRecords: 0,
    totalPages: 0,
    currentPage: 0,
    pageSize: 10,
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

  const getProducts = async (currentPage = 0, pageSize = 10) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/products?page=${currentPage}&pageSize=${pageSize}`
      );

      if (response.status === 200) {
        setProducts(response.data.data);
        setPageMetaData(response.data.metadata);
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) {
      toast.error("Upload a file");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", event.target.files[0]);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/products/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        setLoading(false);
        getProducts(pageMetaData.currentPage, pageMetaData.pageSize);
        toast.success(response.data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const fetchSearchProducts = async (searchTerm: string) => {
    let endpoint = `products/search?code=${encodeURIComponent(
      searchTerm.trim()
    )}`;
    if (searchTerm.trim() === "") {
      endpoint = "products";
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/${endpoint}`
      );

      if (response.status === 200) {
        setProducts(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    getProducts(pageMetaData.currentPage, pageMetaData.pageSize);
  }, [pageMetaData.currentPage, pageMetaData.pageSize]);

  return loading ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 20 }}>
      <CircularProgress />
    </Box>
  ) : (
    <div>
      <ToastContainer />
      <Grid container alignItems={"end"} spacing={2} mb={2}>
        <Grid item xs={4}>
          <SearchBox cb={fetchSearchProducts} />
        </Grid>
        <Grid item xs={8}>
          <Box display="flex" gap={2.3} sx={{ float: "right" }}>
            <div>
              <input
                type="file"
                accept=".xlsx"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label htmlFor="fileInput">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<CloudUpload />}
                >
                  Upload Excel File
                </Button>
              </label>
            </div>
            <Box>
              <MuiIconBtn
                onClick={onFilterBtnClick("right", true)}
                variant="contained"
              >
                <FilterAltIcon />
              </MuiIconBtn>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {products.length > 0 ? (
        <HomeTable
          refetchApi={getProducts}
          rows={products}
          pageMetaData={pageMetaData}
          setPageMetaData={setPageMetaData}
        />
      ) : (
        <p style={{ textAlign: "center" }}>No records to show</p>
      )}
      <Sidebar
        openSidebar={openRSidebar}
        toggleDrawer={onFilterBtnClick}
        width={300}
      >
        <Box p={2}>
          {filterData.map((item: (typeof filterData)[0]) => {
            return (
              <Fragment key={item.id}>
                <FormLabel component={"legend"} sx={{ mb: 1, fontWeight: 600 }}>
                  {item.label}
                </FormLabel>
                <MuiInput
                  sx={{ mb: 2 }}
                  label={`Filter ${item.label}`}
                  fullWidth
                  size="small"
                />
              </Fragment>
            );
          })}
        </Box>
      </Sidebar>
    </div>
  );
};

export default Home;
