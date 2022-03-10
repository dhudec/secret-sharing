import React from 'react';
import { LottieLoader } from '@/components/shared/LottieLoader';
import animationData from './animation-data/initial-page-basistheory-loader.json';

interface Props {
  width?: number;
  height?: number;
}

export const InitialPageLogoLoader = (loaderProps: Props) => (
  <LottieLoader animationData={animationData} {...loaderProps} />
);
