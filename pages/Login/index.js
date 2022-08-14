import React from "react";

import Head from "next/head";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Stack } from "@mui/material";
import GoogleSignin from "../../styles/Icons/GoogleSign";
import GuestSignin from "../../styles/Icons/GuestSignin";

export default function LoginPage() {
  return (
    <React.Fragment>
      <Head></Head>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "primary.bg" }} elevation={0}>
          <Toolbar>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ArrowBackIosNewRoundedIcon sx={{ color: "primary.text" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            height: "90vh",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "800", color: "primary.text" }}
          >
            Log in
          </Typography>
          <Box>
            <Box sx={{ my: 2.5 }}>
              <Stack spacing={1.5}>
                  <TextField
                    id="Email"
                    label="Email"
                    variant="filled"
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                  />
                  <TextField
                    id="Password"
                    label="Password"
                    variant="filled"
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                  />
                <Stack>
                <Typography
                  sx={{
                    color: "primary.text",
                    marginLeft: "auto",
                  }}
                >
                  Don{"'"}t have an account? <Link href={"/Signup"}> Signup </Link>
                </Typography>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ my: 1 }}>
              <Button
                variant="contained"
                href=""
                fullWidth
                sx={{ borderRadius: 25, padding: 1.5 }}
              >
                Log in
              </Button>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography sx={{ textAlign: "center" }}>
                Or Continue with
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button disableRipple>
                <GoogleSignin />
              </Button>
              <Button disableRipple>
                <GuestSignin />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
