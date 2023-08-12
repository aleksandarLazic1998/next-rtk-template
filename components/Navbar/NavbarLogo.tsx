import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { JsxElement } from 'typescript';

interface IProps {
  children: ReactNode;
}

export const NavbarLogo = ({ children }: IProps) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      {children}
    </Typography>
  );
};
