"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, PaletteMode } from "@mui/material";
import getDesignTokens from "@/src/utils/getDesignedTokens";
import useCreateMUITheme from "@/hooks/useCreateMUITheme";

interface IProps {
	children: ReactNode;
}

const MuiThemeProvider = ({ children }: IProps) => {
	const theme = useCreateMUITheme();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MuiThemeProvider;
