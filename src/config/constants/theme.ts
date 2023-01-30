import { ThemeOptions } from '@mui/material';

const themeConfig: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#6B0DD4'
        },
        secondary: {
            main: '#f59f53'
        },
        background: {
            default: '#431b6e',
            paper: '#351286'
        }
    },
    typography: {
        fontFamily: "'Rubik', sans-serif",
        fontSize: 14
    },
    shape: {
        borderRadius: 6
    },
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    borderRadius: 6
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        cursor: 'not-allowed',
                        pointerEvents: 'all',
                        backgroundColor: '#6B0DD4AA'
                    }
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    background: 'rgba(0, 0, 0, 0.7)'
                }
            }
        }
    }
};

export default themeConfig;
