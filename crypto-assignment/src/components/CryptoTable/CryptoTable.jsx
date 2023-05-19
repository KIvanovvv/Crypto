import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useEffect } from "react";
import getCoins from "../../service/coinService";
import ErrorMessage from "../ErrorMessage.jsx/ErrorMessage";

export default function CryptoTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        setCoins(await getCoins());
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {error && <ErrorMessage error={error} />}
      {!error && !loading && (
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 850,
            maxHeight: 600,
            minHeight: 400,
            alignSelf: "center",
          }}
        >
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  <Typography variant="h6" fontWeight={"bold"}>
                    #
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    Name
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Typography variant="h6" fontWeight={"bold"}>
                    Price
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Typography variant="h6" fontWeight={"bold"}>
                    Market Cap
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Typography variant="h6" fontWeight={"bold"}>
                    Volume&nbsp;(24h)
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coins.map((coin) => (
                <TableRow
                  key={coin.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <Typography variant="body1" fontWeight={"bold"}>
                      {coin.rank}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Avatar
                        sizes="small"
                        src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                        sx={{ width: 20, height: 20 }}
                      />
                      {coin.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography variant="body1" fontWeight={"bold"}>
                      ${Number(coin.priceUsd).toFixed(4)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography variant="body1" fontWeight={"bold"}>
                      ${Number(coin.marketCapUsd).toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography variant="body1" fontWeight={"bold"}>
                      ${Number(coin.volumeUsd24Hr).toFixed(2)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {loading && (
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={400} disableShrink />
        </Box>
      )}
    </>
  );
}
