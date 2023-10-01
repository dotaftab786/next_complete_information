import {
  AppBar,
  Toolbar,
  Stack,
  Typography
} from "@mui/material";

import Link from "next/Link";

const Navbar = ()=>{
  const design = (
    <>
      <AppBar position="static">
        <Stack direction="row" justifyContent="space-between">
          <Toolbar>
            <Typography>Nextwap</Typography>
          </Toolbar>
          <Toolbar>
            <Stack direction="row" spacing={3}>
              <Link href="/">Homepage</Link>
              <Link href="/courses">Courses</Link>
              <Link href="/login">Login</Link>
            </Stack>
          </Toolbar>
        </Stack>
      </AppBar>
    </>
  );
  return design;
}
export default Navbar;
