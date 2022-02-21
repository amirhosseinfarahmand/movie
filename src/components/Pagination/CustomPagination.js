import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CustomPagination = ({ setPage, numOfCount = 10 }) => {
  const handelChangePage = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF8F00",
        contrastText: "#fff",
      },
      text: {
        primary: "#FFFFFF",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Pagination
          onChange={(e) => handelChangePage(e.target.textContent)}
          count={numOfCount}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
