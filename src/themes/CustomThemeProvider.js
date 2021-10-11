import React, { createContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';

//predefined themes
import light from './light';
import botanical from './botanical';

export const CustomThemeContext = createContext({
	currentTheme: 'light',
	setTheme: null
});



//default themeNmae = 'light'
const themes = {
	light,
	botanical,
}

const getTheme = (theme) => {
	return themes[theme];
}


const CustomThemeProvider = props => {
	const { children } = props;

	// Get current theme from localStorage
	let currentTheme = localStorage.getItem('appTheme') ?? 'light';
	currentTheme = (currentTheme === "null") ? 'light' : currentTheme;

	// State to hold selected theme
	const [themeName, _setThemeName] = useState(currentTheme);

	// Retrieve theme object by theme name
	const theme = getTheme(themeName);
	console.log("themeName=" + themeName + ",theme=" + theme);

	// Wrap _setThemeName to store new theme names in localStorage
	const setThemeName = name => {
		localStorage.setItem('appTheme', name);
		_setThemeName(name);
	};

	const contextValue = {
		currentTheme: themeName,
		setTheme: setThemeName
	};

	return (
		<CustomThemeContext.Provider value={contextValue}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</CustomThemeContext.Provider>
	);
};

export default CustomThemeProvider;