type PaletteBasicType = {
  /**
   *
   */
  main: string;
  /**
   *
   */
  disabled?: string;
  /**
   *
   */
  active?: string;
  /**
   * 点击
   */
  light?: string;
  /**
   *
   */
  dark?: string;
  /**
   * 高对比度文本
   */
  contrastText?: string;
};

const gray = {
  'gray-0': '#f9f9f9',
  'gray-1': '#e6e8ea',
  'gray-2': '#c6cacd',
  'gray-3': '#a7abb0',
  'gray-4': '#888d92',
  'gray-5': '#6b7075',
  'gray-6': '#555b61',
  'gray-7': '#41464c',
  'gray-8': '#2e3238',
  'gray-9': '#1c1f23',
};

const blue = {
  'blue-0': '#eaf5ff',
  'blue-1': '#cbe7fe',
  'blue-2': '#98cdfd',
  'blue-3': '#65b2fc',
  'blue-4': '#3295fb',
  'blue-5': '#0077fa',
  'blue-6': '#0062d6',
  'blue-7': '#004fb3',
  'blue-8': '#003d8f',
  'blue-9': '#002c6b',
};

const red = {
  'red-0': '#fef2ed',
  'red-1': '#feddd2',
  'red-2': '#fdb7a5',
  'red-3': '#fb9078',
  'red-4': '#fa664c',
  'red-5': '#f93920',
  'red-6': '#d52515',
  'red-7': '#b2140c',
  'red-8': '#8e0805',
  'red-9': '#6a0103',
};

export interface Theme {
  palette: {
    /**
     * 主题模式，暂时不考虑暗色系主题
     */
    mode: 'light' | 'dark';
    common: {
      black: string;
      white: string;
    };
    primary: PaletteBasicType;
    info: PaletteBasicType;
    success: PaletteBasicType;
    error: PaletteBasicType;
    warning: PaletteBasicType;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    divider: string;
    background: {
      paper: string;
      default: string;
    };
    gray: {
      'gray-0': string;
      'gray-1': string;
      'gray-2': string;
      'gray-3': string;
      'gray-4': string;
      'gray-5': string;
      'gray-6': string;
      'gray-7': string;
      'gray-8': string;
      'gray-9': string;
    };
    /**
     * 不同操作的设置
     */
    action: {
      activatedOpacity: number;
      disabledOpacity: number;
    };
    /**
     * disable模式下的配色
     */
    disabled: {
      text: string;
      border: string;
      bg: string;
      fill: string;
    };
  };
  zIndex: {
    mobileStepper: number;
    speedDial: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  };
  spacing: number;
  font: {
    sm: number;
    xs: number;
    md: number;
    lg: number;
    xl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
  };
}

const defaultTheme: Theme = {
  palette: {
    mode: 'light',
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: blue['blue-5'],
      disabled: '#a9d7ff',
      active: '#135cb8',
    },
    info: {
      main: '#54a9ff',
      disabled: '#a9d7ff',
      active: '#135cb8',
    },
    error: {
      main: red['red-5'],
      disabled: '#ffa39e',
      active: red['red-7'],
    },
    warning: {
      main: '#ffc53d',
      disabled: '#ffe58f',
      active: '#874d00',
    },
    success: {
      main: '#73d13d',
      disabled: '#b7eb8f',
      active: '#135200',
    },
    background: {
      paper: gray['gray-2'],
      default: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      disabledOpacity: 0.5,
      activatedOpacity: 0.3,
    },
    gray,
    disabled: {
      text: gray['gray-9'],
      border: gray['gray-1'],
      bg: gray['gray-1'],
      fill: gray['gray-8'],
    },
  },
  zIndex: {
    mobileStepper: 100,
    speedDial: 100,
    appBar: 100,
    drawer: 100,
    modal: 100,
    snackbar: 100,
    tooltip: 100,
  },
  spacing: 4,
  font: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
  radius: {
    sm: 2,
    md: 4,
    lg: 8,
  },
};

export default defaultTheme;
