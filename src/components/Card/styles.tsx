import defaultTheme from '../../core/Theme/defaultTheme';

const {
  spacing,
  font,
  palette: { gray },
  radius,
} = defaultTheme;

const CardStyle = {
  root: { borderRadius: radius.md },
  rootBorder: {
    borderColor: gray['gray-1'],
    borderWidth: 1,
  },
  //region Header
  header: {
    paddingHorizontal: spacing * 3,
    paddingVertical: spacing * 2,
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
    paddingHorizontal: spacing * 3,
    paddingVertical: spacing * 2,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  divider: {
    borderTopWidth: 0.6,
    borderTopColor: gray['gray-1'],
  },

  largeRoot: { borderRadius: radius.lg },
  defaultRoot: { borderRadius: radius.md },
  smallRoot: { borderRadius: radius.sm },

  largeHeader: { paddingHorizontal: spacing * 4, paddingVertical: spacing * 3 },
  defaultHeader: { paddingHorizontal: spacing * 3, paddingVertical: spacing * 2 },
  smallHeader: { paddingHorizontal: spacing * 2, paddingVertical: spacing },

  largeBody: { paddingHorizontal: spacing * 4, paddingVertical: spacing * 3 },
  defaultBody: { paddingHorizontal: spacing * 3, paddingVertical: spacing * 2 },
  smallBody: { paddingHorizontal: spacing * 2, paddingVertical: spacing },

  largeText: { fontSize: font.lg },
  largeDesc: { fontSize: font.lg, color: gray['gray-6'] },
  largeTitle: { fontSize: font.xl },

  defaultText: { fontSize: font.md },
  defaultDesc: { fontSize: font.md, color: gray['gray-6'] },
  defaultTitle: { fontSize: font.lg },

  smallText: { fontSize: font.xs },
  smallDesc: { fontSize: font.xs, color: gray['gray-6'] },
  smallTitle: { fontSize: font.md },
};

export default CardStyle;
