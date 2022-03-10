import useStyles from "@/components/pages/styles/Footer.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

export const FooterInfo = () => {
    const classes = useStyles();

    return (
        <Paper sx={{width: '500px'}} variant="outlined" className={classes.customPlansPaper}
        >
            <Box display="flex" flexDirection="row">
                <Box pl={2} pt={2} pb={2}>
                    <img src="/secret-share-icon.png" width="48px" height="48px"/>
                </Box>
                <Box sx={{textAlign: 'left'}} py={2} ml={2.5}>
                    <Typography sx={{fontWeight: 600}} variant="h6">How did we make it secure?</Typography>
                    <Typography color="textSecondary" variant="subtitle2">Learn more about securing data with <Link target="_blank" href="https://developers.basistheory.com">Basis Theory</Link>.</Typography>
                </Box>
            </Box>
        </Paper>
    );
};
