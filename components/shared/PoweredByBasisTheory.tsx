import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {BasisTheoryLogoWithText} from "@/components/shared/BasisTheoryLogoWithText";
import React from "react";
import {useTranslation} from "next-i18next";
import Button from "@mui/material/Button";

export const PoweredByBasisTheory = () => {
    const {t} = useTranslation('secrets');

    return <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center">
        <Typography color="textSecondary" variant="body2">{t('poweredBy')}</Typography>
        <Box display="flex" justifyContent="center" mt={2}>
            <Button href="https://basistheory.com" target="_blank"><BasisTheoryLogoWithText/></Button>
        </Box>
    </Box>;
}