import { createTheming } from 'theming';
import { createContext } from 'react';
import defaultTheme, { Theme } from './defaultTheme';

export const { ThemeProvider, useTheme, withTheme } = createTheming<Theme>(
  createContext(defaultTheme)
);

export { defaultTheme };
export * from './defaultTheme';
