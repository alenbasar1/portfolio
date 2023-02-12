type ThemeSets = {
  primary: { active: { classes: string }; inactive: { classes: string } };
  secondary: { active: { classes: string }; inactive: { classes: string } };
};

export const menuItemButtonConfig: {
  dark: ThemeSets;
  light: ThemeSets;
} = {
  dark: {
    primary: {
      active: {
        classes:
          "relative text-AntiFlashWhite p-1 h-full after:content-[''] after:bg-white after:h-1 after:absolute after:w-[100%] after:left-0 after:bottom-0 hover:after:w-[100%] hover:after:duration-300 ",
      },
      inactive: {
        classes:
          "relative text-AntiFlashWhite p-1 h-full after:content-[''] after:bg-white after:h-1 after:absolute after:w-[0%] after:left-0 after:bottom-0 hover:after:w-[100%] hover:after:duration-300 after:duration-300",
      },
    },
    secondary: { active: { classes: "" }, inactive: { classes: "" } },
  },
  light: {
    primary: { active: { classes: "" }, inactive: { classes: "" } },
    secondary: { active: { classes: "" }, inactive: { classes: "" } },
  },
};
