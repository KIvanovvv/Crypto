import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Tooltip, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const dummyData = [
  {
    rank: 1,
    name: "Bitcoin",
    price: 60000,
    marketCap: 1000000000000,
    volume: 50000000,
  },
  {
    rank: 2,
    name: "Ethereum",
    price: 4000,
    marketCap: 500000000000,
    volume: 30000000,
  },
  {
    rank: 3,
    name: "Ripple",
    price: 1,
    marketCap: 100000000000,
    volume: 20000000,
  },
  {
    rank: 4,
    name: "Cardano",
    price: 2,
    marketCap: 50000000000,
    volume: 15000000,
  },
  {
    rank: 5,
    name: "Binance Coin",
    price: 300,
    marketCap: 40000000000,
    volume: 10000000,
  },
  {
    rank: 6,
    name: "XRP",
    price: 0.5,
    marketCap: 30000000000,
    volume: 8000000,
  },
  {
    rank: 7,
    name: "Dogecoin",
    price: 0.3,
    marketCap: 20000000000,
    volume: 6000000,
  },
  {
    rank: 8,
    name: "Polkadot",
    price: 40,
    marketCap: 15000000000,
    volume: 4000000,
  },
  {
    rank: 9,
    name: "Litecoin",
    price: 150,
    marketCap: 10000000000,
    volume: 3000000,
  },
  {
    rank: 10,
    name: "Bitcoin Cash",
    price: 800,
    marketCap: 9000000000,
    volume: 2000000,
  },
];
export default function CryptoTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 650, alignSelf: "center" }}
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
              <Typography variant="h6" fontWeight={"bold"}>
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
          {dummyData.map((coin) => (
            <TableRow
              key={coin.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">
                <Typography
                  variant="body2"
                  fontWeight={"bold"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Tooltip title="Add to watchlist">
                    <IconButton>
                      <ControlPointIcon />
                    </IconButton>
                  </Tooltip>
                  {coin.rank}
                </Typography>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Typography variant="body2" fontWeight={"bold"}>
                  {coin.name}
                </Typography>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Typography variant="body2" fontWeight={"bold"}>
                  ${coin.price}
                </Typography>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Typography variant="body2" fontWeight={"bold"}>
                  ${coin.marketCap}
                </Typography>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Typography variant="body2" fontWeight={"bold"}>
                  ${coin.volume}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
