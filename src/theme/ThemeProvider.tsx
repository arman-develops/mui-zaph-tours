import { createTheme, ThemeProvider as MuiThemeProvider} from "@mui/material";
import type { ReactNode } from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2E7D32",
            light: "#4CAF50",
            dark: "#1B5E20",
        },
        secondary: {
            main: "#FF6F00",
            light: "#FF8F00",
            dark: "#E65100",
        },
        background: {
            default: "#FAFAFA",
            paper: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: "Inter, sans-serif",
            h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: 1.3,
        },
        h3: {
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: 1.4,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                textTransform: "none",
                borderRadius: 8,
                padding: "12px 24px",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                borderRadius: 12,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                },
            },
        },
    },
})

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({children}: ThemeProviderProps) {
    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    )
}