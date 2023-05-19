import { Button, Stack } from "@mui/material";
import "./App.css";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import styles from "./App.style.js";
import { useState } from "react";

function App() {
  const [refreshToggle, setRefreshToggle] = useState(false);
  return (
    <Stack sx={styles} gap={3}>
      <Button
        variant="contained"
        sx={{ alignSelf: "center" }}
        onClick={() => setRefreshToggle((curr) => !curr)}
      >
        Refresh
      </Button>
      <CryptoTable refreshToggle={refreshToggle} />
    </Stack>
  );
}

export default App;
