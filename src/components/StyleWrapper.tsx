import React from 'react';
import '../styles/tailwind.css';

import '../styles/MuiOverrides/autocomplete.css';
import '../styles/MuiOverrides/backdrop.css';
import '../styles/MuiOverrides/button.css';
import '../styles/MuiOverrides/chip.css';
import '../styles/MuiOverrides/divider.css';
import '../styles/MuiOverrides/form.css';
import '../styles/MuiOverrides/input.css';
import '../styles/MuiOverrides/list.css';
import '../styles/MuiOverrides/popover.css';
import '../styles/MuiOverrides/tabs.css';

import MuiThemeConfig from './MuiThemeConfig';

const StyleWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <MuiThemeConfig>{children}</MuiThemeConfig>;
};

export default StyleWrapper;
