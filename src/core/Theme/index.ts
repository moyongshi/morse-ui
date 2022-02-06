import { createTheming } from '@callstack/react-theme-provider';

import defaultTheme from './defaultTheme';
const { ThemeProvider, withTheme, useTheme } = createTheming(defaultTheme);

export type { Theme } from './defaultTheme';
export { ThemeProvider, useTheme, withTheme };
export default defaultTheme;
