import { Box, Button, Card, CardContent, FormControl, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { loginThunk } from '../../store/login/login.thunk';
import { typedUseDispatch } from '../../store/store';

const MarginedInput = styled(TextField)`
  margin: 10px 0;
`


export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = typedUseDispatch();

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid md={6} xs={12}>
        <Card >
          <CardContent>
            <Typography variant="h5" align="center">Login</Typography>
            <Box component="form" noValidate autoComplete="off" justifyContent="center" display="flex" flexDirection="column"  >
              <FormControl fullWidth>
                <MarginedInput
                  required
                  id="username"
                  label="Username"
                  value={username}
                  onChange={evt => setUsername(evt.currentTarget.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <MarginedInput
                  required
                  id="password"
                  label="Password"
                  value={password}
                  onChange={evt => setPassword(evt.currentTarget.value)}
                />
              </FormControl>
              <Button onClick={submitClick}>Login</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  function submitClick(){
    // validate
    // activate login thunk
    dispatch(loginThunk({
      username,
      password
    }));
  }
}