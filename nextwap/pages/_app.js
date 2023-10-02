import '@/styles/globals.css'
import {
  createTheme,
  ThemeProvider,
  Paper
} from "@mui/material";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette:{
      mode: "dark"
    }
  })

    const design = (
      <ThemeProvider theme={theme}>
        <Paper sx={{minHeight:"100vh", borderRadius:"none"}}>
          <Component {...pageProps} />
        </Paper>
      </ThemeProvider>
    );
    return design;
}
