import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
          }
        : {
            // palette values for dark mode
          }),
    },
  };
};

export default getDesignTokens;
