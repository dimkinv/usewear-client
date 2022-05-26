import { Box, Button, Card, CardContent, FormControl, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setJwtToken } from '../../utils/localstorage.service';
import { loginThunk } from '../../store/login/login.thunk';
import { typedUseDispatch, typedUseSelector } from '../../store/store';

const MarginedInput = styled(TextField)`
  margin: 10px 0;
`


export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = typedUseDispatch();
  const returnPath = typedUseSelector(state => state.loginStore.from);
  const navigate = useNavigate();

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item md={6} xs={12}>
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

  async function submitClick() {
    // validate
    // activate login thunk
    try {
      const response = await dispatch(loginThunk({
        username,
        password
      })).unwrap();
      setJwtToken(response.accessToken);
      navigate(returnPath);
    } catch (error) {
      console.log(error);
    }
  }
}