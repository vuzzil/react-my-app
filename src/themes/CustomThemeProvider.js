import React, { createContext, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';


//predefined themes
import LightTheme from './LightTheme';
import botanical from './botanical';

export const CustomThemeContext = createContext({
	currentTheme: 'light',
	setTheme: null
});



//mui default theme 
const mui = createTheme();
const dark = createTheme({
	palette: {
		mode: 'dark',
		// primary: { main: 'rgb(131, 10, 191)' },
		// background: { paper: '#071d30' },
	},
});

const CustomThemeProvider = props => {
	const { children } = props;

	const customization = useSelector((state) => state.customization);
	console.log("customization fontFamily=" + customization.fontFamily);

	//custom themes..............
	const light = LightTheme(customization);
	console.log("light theme primary.main color= " + light.palette.primary.main);

	//default themeNmae = 'light'
	const themes = {
		light,
		mui,
		botanical,
		dark,
	}

	const getTheme = (theme) => {
		return themes[theme];
	}

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