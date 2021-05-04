import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
} from "@chakra-ui/react";

export const theme = extendTheme(
  {
    components: {
      FormControl: {},
    },
    colors: {
      darkMode: {
        foreground: '#a9b1d6',
        background: '#24283b',
        bar: '#1f2335',
      }
    }
  },
  withDefaultProps({
    defaultProps: {
      rounded: "full",
    },
    components: ["Button", "Input"],
  }),
  withDefaultColorScheme({
    colorScheme: "purple",
    components: ["Button", "FormControl", "Input", "Checkbox", "Select"],
  }),
);
