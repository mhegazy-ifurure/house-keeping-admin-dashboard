// src/components/CustomLogin.js

import { useState } from "react";
import { useLogin, useNotify, useRedirect, Loading, Login } from "react-admin";
import { TextField, Button, Typography, Paper, Grid } from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const login = useLogin();
  const notify = useNotify();
  const redirect = useRedirect();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLoading(true);

    login({ username, email, password })
      .then(() => {
        redirect("/"); // Redirect to the dashboard after login
      })
      .catch((error) => {
        notify("Login failed: " + error.message, { type: "error" });
        setLoading(false);
      });
  };

  if (loading) return <Loading />;

  return (
    <Login >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        // style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: "2em" }}>
            <Typography variant="h5" align="center">
              Admin Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />{" "}
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type="submit"
                style={{marginTop:'1rem'}}
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Login>
  );
};

export default LoginPage;
