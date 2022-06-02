import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { typedUseSelector } from "../store/store";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const pageTitle = typedUseSelector(store => store.mainStore.pageTitle)

  return (
    <AppBar className="app-bar" position="relative" color="secondary">
      <Toolbar >
        <Typography  variant="h4" color="inherit" noWrap>
          {pageTitle}
        </Typography>
        <Box sx={{ marginLeft: '50px', display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <Button onClick={() => navigate('/items/arch')}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Archaeological items
          </Button>
          <Button onClick={() => navigate('/items/exp')}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            experimental items
          </Button>
        </Box>
      </Toolbar>

    </AppBar>
  )
}