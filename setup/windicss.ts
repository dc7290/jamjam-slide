import { defineWindiSetup } from "@slidev/types";

export default defineWindiSetup(() => ({
  shortcuts: {},
  theme: {
    extend: {
      fontFamily: {
        sans: '"Noto Sans JP", sans-serif',
        serif: '"Scheherazade New", serif',
        mono: '"Source Code Pro", monospace',
      },
    },
  },
}));
