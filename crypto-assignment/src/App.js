import { Stack } from "@mui/material";
import "./App.css";
import CryptoTable from "./components/CryptoTable/CryptoTable";

function App() {
  return (
    <Stack sx={{ height: "100vh" }} justifyContent={"center"}>
      <CryptoTable />
    </Stack>
  );
}

export default App;
