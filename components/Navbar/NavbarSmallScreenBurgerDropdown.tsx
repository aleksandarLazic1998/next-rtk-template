import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface IProps {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: (page?: string) => void;
  pages: string[];
}

export const NavbarSmallScreenBurgerDropdown = (props: IProps) => {
  const { handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages } = props;
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={() => handleCloseNavMenu()}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
