import { createTheming } from 'theming';
import defaultTheme, { Theme } from './defaultTheme';
import { createContext } from 'react';

export const { ThemeProvider, useTheme, withTheme } = createTheming<Theme>(
  createContext(defaultTheme)
);
export * from './defaultTheme';
