import { Stack } from "@mui/material";
import "./App.css";
import CryptoTable from "./components/CryptoTable/CryptoTable";

function App() {
  return (
    <Stack
      sx={{
        height: "100vh",
        backgroundImage:
          "url(https://png.pngtree.com/background/20211217/original/pngtree-geometric-line-distance-education-learning-grid-background-picture-image_1595370.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      justifyContent={"center"}
    >
      <CryptoTable />
      
    </Stack>
  );
}

export default App;
