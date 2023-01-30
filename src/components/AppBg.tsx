import Box from '@mui/material/Box';

const AppBg = () => {
    return (
        <Box className="app-background">
            <Box
                component="img"
                src="https://discoburntoken.com/wp-content/uploads/2021/12/Blockchain-Background.jpg"
                alt="app-bg"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </Box>
    );
};

export default AppBg;
