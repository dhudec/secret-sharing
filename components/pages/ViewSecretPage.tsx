import React from 'react';
import { BasisTheoryLogoWithText } from '@/components/shared';
import {useViewSecretPage} from "@/components/pages/ViewSecretPage.hooks";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {PoweredByBasisTheory} from "@/components/shared/PoweredByBasisTheory";

export const ViewSecretPage = () => {
    const {} = useViewSecretPage();

    return <Box><PoweredByBasisTheory/></Box>
}
