import '@/styles/globals.css'
import {
  createTheme,
  ThemeProvider,
  Paper
} from "@mui/material";

import {
  useRouter
} from "next/router";

import {
  useEffect
} from "react";

import NProgress from "nprogress";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette:{
      mode: "light"
    }
  })
    const router = useRouter();
    useEffect(()=>{
      router.events.on("routeChangeStart",()=>{
        NProgress.start();
      })

      router.events.on("routeChangeComplete",()=>{
        NProgress.done();
      })
    },[router]);
    const design = (
      <ThemeProvider theme={theme}>
        <Paper sx={{minHeight:"100vh", borderRadius:"none"}}>
          <Component {...pageProps} />
        </Paper>
      </ThemeProvider>
    );
    return design;
}
