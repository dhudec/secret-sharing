import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export const Search = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      clipRule="evenodd"
      d="M15.1672 7.34809C13.0103 5.1833 9.51679 5.1833 7.35991 7.34898L7.35786 7.35104C5.19366 9.50731 5.19211 13.0017 7.35983 15.1694C9.51625 17.3258 13.012 17.3275 15.18 15.1686C17.3363 13.0114 17.336 9.5169 15.1792 7.36006C15.1773 7.35823 15.1755 7.35639 15.1737 7.35455C15.1715 7.35241 15.1694 7.35026 15.1672 7.34809ZM16.2343 6.29395C16.2328 6.29242 16.2313 6.2909 16.2298 6.28938C13.487 3.53651 9.04132 3.53617 6.29812 6.28946C3.54534 9.03327 3.54724 13.4781 6.29917 16.2301C9.04266 18.9736 13.4867 18.972 16.2387 16.2311L16.2398 16.2301C18.9827 13.4872 18.9827 9.0423 16.2398 6.2994C16.238 6.29757 16.2362 6.29575 16.2343 6.29395Z"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M15.1792 15.1794C15.4721 14.8865 15.9469 14.8865 16.2398 15.1794L19.5298 18.4694C19.8227 18.7623 19.8227 19.2372 19.5298 19.5301C19.2369 19.823 18.7621 19.823 18.4692 19.5301L15.1792 16.2401C14.8863 15.9472 14.8863 15.4723 15.1792 15.1794Z"
      fillRule="evenodd"
    />
  </SvgIcon>
);

export default Search;