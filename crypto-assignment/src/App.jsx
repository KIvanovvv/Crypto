import { Stack } from "@mui/material";
import "./App.css";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import styles from "./App.style.js";

function App() {
  return (
    <Stack sx={styles} justifyContent={"center"}>
      <CryptoTable />
    </Stack>
  );
}

export default App;
