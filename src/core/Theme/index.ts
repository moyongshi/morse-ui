import { createContext } from 'react';

import { createTheming } from 'theming';

import defaultTheme, { Theme } from './defaultTheme';

export const { ThemeProvider, useTheme, withTheme } = createTheming<Theme>(createContext(defaultTheme));

export { defaultTheme };
export * from './defaultTheme';
