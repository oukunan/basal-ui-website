import { createStitches } from '@stitches/react'

// Token-aware-values: https://stitches.dev/docs/styling#token-aware-values
const theme = {
  // height
  sizes: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    7: '56px',
    8: '64px',
    9: '72px',
    10: '80px',
  },
  // padding
  space: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    7: '56px',
    8: '64px',
    9: '72px',
    10: '80px',
  },
  fontSizes: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
  },
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config,
} = createStitches({
  theme,
})
