// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      center: 'flex justify-center items-center',
    },
    {
      'border-base': 'border border-[#eee]',
      'flex-center': 'flex justify-center items-center',
      'text-c1': 'text-[#181818]',
      'text-c2': 'text-[#333333]',
      'text-c3': 'text-[#B2B2B2]',
      'text-c4': 'text-[#CCCCCC]',
      bg: 'bg-[#f6f7fb]',
    },
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
    presetWeapp(),
    // attributify autocomplete
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify(),
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
})
