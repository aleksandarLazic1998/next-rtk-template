'use client';
import getDesignTokens from '@/src/utils/getDesignedTokens';
import { PaletteMode, createTheme, useMediaQuery } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { toggleColorMode } from '@/src/store/State/App/appSlice';

const useCreateMUITheme = () => {
  const dispatch = useAppDispatch();

  const { colorMode: chosenColor } = useAppSelector((state) => state.app);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return Object.freeze(theme);
};

export default useCreateMUITheme;
