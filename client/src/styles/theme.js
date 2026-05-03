import { createTheme } from "@mui/material";

let darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#f06292", // Яскравіший рожевий для контрасту на темному
            light: "#ff94c2",
            dark: "#bc3063",
            contrastText: "#000",
        },
        secondary: {
            main: "#f48fb1",
        },
        background: {
            default: "#121212", // Класичний Dark Background
            paper: "#1e1e1e", // Колір карток та модальних вікон
        },
        text: {
            primary: "#ffffff",
            secondary: "#fce4ec",
        },
    },
    shape: {
        borderRadius: 10,
    },
    // Додаємо невелике світіння для карток у темній темі
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
    },
    typography: {
        fontFamily: "M PLUS Rounded 1c, sans-serif",
        title: "Amatic SC, sans-serif",
    },
});

let lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#d81b60", // Малиново-рожевий
            light: "#ff5c8d",
            dark: "#a00037",
            contrastText: "#fff",
        },
        secondary: {
            main: "#f48fb1", // Світло-пудровий
        },
        background: {
            default: "#fdfcfd", // Майже білий з ледь помітним рожевим підтоном
            paper: "#ffffff",
        },
        text: {
            primary: "#311b92", // Глибокий колір для тексту (замість чисто чорного)
            secondary: "#ad1457",
        },
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontFamily: "M PLUS Rounded 1c, sans-serif",
        title: "Amatic SC, sans-serif",
    },
});

export { darkTheme, lightTheme };
