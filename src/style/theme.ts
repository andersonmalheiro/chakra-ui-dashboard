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
  })
);
