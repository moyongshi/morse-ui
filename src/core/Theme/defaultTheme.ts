export interface Theme {
  palette: {
    mode: 'light' | 'dark';
    common: {
      black: string;
      white: string;
    };
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    error: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    warning: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    success: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    info: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    background: {
      paper: string;
      default: string;
    };
    action: {
      active: string;
      hover: string;
      hoverOpacity: string;
      selected: string;
      selectedOpacity: string;
      disabled: string;
      disabledBackground: string;
      disabledOpacity: string;
      focus: string;
      focusOpacity: string;
      activatedOpacity: string;
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
}

const defaultTheme: Theme = {
  palette: {
    mode: 'light',
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#1890ff',
      light: '#91d5ff',
      dark: '#0050b3',
      contrastText: '#ffffff',
    },
    error: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    warning: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    success: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    info: {
      main: '',
      light: '',
      dark: '',
      contrastText: '',
    },
    background: {
      paper: '',
      default: '',
    },
    action: {
      active: '',
      hover: '',
      hoverOpacity: '',
      selected: '',
      selectedOpacity: '',
      disabled: '',
      disabledBackground: '',
      disabledOpacity: '',
      focus: '',
      focusOpacity: '',
      activatedOpacity: '',
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
};

export default defaultTheme;
