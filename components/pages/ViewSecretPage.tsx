import React from 'react';
import {useViewSecretPage} from "@/components/pages/ViewSecretPage.hooks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {PoweredByBasisTheory} from "@/components/shared/PoweredByBasisTheory";
import Button from "@mui/material/Button";
import CopyIcon from "@mui/icons-material/ContentCopyOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import {Paper} from "@mui/material";

export const ViewSecretPage = () => {
    const {t, secret, viewSecret, copySecret} = useViewSecretPage();

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center">
            <Box mt={4} mb={19.5}>
                <PoweredByBasisTheory/>
            </Box>
            <Box mb={1}>
                <Typography variant="h5" sx={{fontWeight: 600}}>{t('somebodySentSecret')}</Typography>
            </Box>
            <Box mb={4}>
                <Typography color="textSecondary" variant="body1">{t('clickToView')}</Typography>
            </Box>
            <Box alignItems="center" display="flex" flexDirection="column" mt={4}>
                {secret ?
                    <Paper sx={{width: '500px'}} variant="outlined">
                        <Box pb={1.5} pt={5}>
                            <Box mb={3}>
                                <Typography sx={{
                                    fontFamily: 'Source Code Pro',
                                    fontSize: '23px',
                                }}>
                                    {secret}
                                </Typography>
                            </Box>
                            <Button onClick={copySecret} variant="text">
                                <Box alignItems="center" display="flex">
                                    <CopyIcon fontSize="small"/>
                                    <Box ml={1}>
                                        <Typography sx={{
                                            fontSize: '13px',
                                            fontWeight: 600
                                        }}>
                                            {t('copy')}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Button>
                        </Box>
                    </Paper> :
                    <Paper sx={{width: '500px'}} variant="outlined">
                        <Box py={5}>
                            <Button onClick={viewSecret} variant="contained">
                                <Box alignItems="center" display="flex">
                                    <VisibilityIcon/>
                                    <Box ml={1}>
                                        <Typography sx={{
                                            fontSize: '16px',
                                            fontWeight: 600
                                        }}>
                                            {t('viewSecret')}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Button>
                        </Box>
                    </Paper>}
            </Box>
            <Box alignItems="center" display="flex" flexDirection="column" mb={8} mt={19.5}>
                <Paper sx={{width: '500px'}} variant="outlined">
                    <Box sx={{textAlign: 'left'}} py={2}>
                        <Typography sx={{fontWeight: 600}} variant="h6">How did we make it secure?</Typography>
                        <Typography color="textSecondary" variant="subtitle2">Learn more about securing data with Basis Theory.</Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>);
}
