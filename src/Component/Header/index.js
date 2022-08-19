import { Box, Container, Typography } from "@mui/material";

export default function PageHeader({ children }){
    return(
        <Box>
            <Box>
                <Typography variant="h3" style={{fontWeight: 700, marginBlock: 12}}>
                    {children}
                </Typography>
            </Box>
        </Box>
    )
}