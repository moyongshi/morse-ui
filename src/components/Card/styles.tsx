import defaultTheme from '../../core/Theme/defaultTheme';
import { padding } from '../../utils/style';

const {
  spacing,
  font,
  palette: {gray},
  radius,
} = defaultTheme;

const CardStyle = {
  root: {borderRadius: radius.md},
  rootBorder: {
    borderColor: gray['gray-1'],
    borderWidth: 1,
  },
  //region Header
  header: {
    ...padding(spacing * 2, spacing * 3),
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  avatar: {
    marginRight: 6,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  detail: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  extra: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    marginLeft: 6,
  },
  //endregion
  body: {
    ...padding(spacing * 2, spacing * 3),
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    flexWrap: 'wrap'
  },
  divider: {
    borderTopWidth: 0.6,
    borderTopColor: gray['gray-1'],
  },

  largeRoot: {borderRadius: radius.lg},
  defaultRoot: {borderRadius: radius.md},
  smallRoot: {borderRadius: radius.sm},

  largeHeader: {...padding(spacing * 3, spacing * 4)},
  defaultHeader: {...padding(spacing * 2, spacing * 3)},
  smallHeader: {...padding(spacing, spacing * 2)},

  largeBody: {...padding(spacing * 4, spacing * 3)},
  defaultBody: {...padding(spacing * 3, spacing * 2)},
  smallBody: {...padding(spacing * 2, spacing)},

  largeText: {fontSize: font.lg},
  largeDesc: {fontSize: font.lg, color: gray['gray-6']},
  largeTitle: {fontSize: font.xl},

  defaultText: {fontSize: font.md},
  defaultDesc: {fontSize: font.md, color: gray['gray-6']},
  defaultTitle: {fontSize: font.lg},

  smallText: {fontSize: font.xs},
  smallDesc: {fontSize: font.xs, color: gray['gray-6']},
  smallTitle: {fontSize: font.md},
};

export default CardStyle;
