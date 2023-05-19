import { Alert, Stack, Typography } from "@mui/material";

export default function ErrorMessage({ error }) {
  return (
    <Stack gap={5}>
      <Alert severity="error" sx={{ alignSelf: "center" }}>
        <Typography variant="body1">{error}</Typography>
      </Alert>
      <Stack sx={{ alignSelf: "center" }}>
        <img
          src="https://png.pngtree.com/background/20211217/original/pngtree-system-error-red-with-sad-face-picture-image_1594582.jpg"
          width={600}
          style={{ borderRadius: "10px" }}
        />
      </Stack>
    </Stack>
  );
}
