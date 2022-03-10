import React from 'react';
import { LottieLoader } from '@/components/shared/LottieLoader';
import animationData from './animation-data/tab-page-basistheory-loader.json';

interface Props {
  width?: number;
  height?: number;
}

export const TabLogoLoader = (loaderProps: Props) => (
  <LottieLoader animationData={animationData} {...loaderProps} />
);
