import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      btn: 'p-2 rounded inline-block bg-gray-6 hover:bg-gray-5 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-600 disabled:opacity-50',
    },
    {
      'center': 'flex justify-center items-center',
      'center-col': 'center flex-col',
    },
    {
      'icon': 'h-4 w-4 cursor-pointer inline-block',
      'icon-btn': 'rounded-full p-2 center',
    },
    {
      'blur-bg': 'backdrop-blur-10 bg-[#00000010] dark:bg-[#ffffff10]',
    },
    {
      input: 'rounded bg-light py-2 px-4 dark:bg-dark',
    },
    {
      'trans-all': 'transition-all duration-300 ease-in-out',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
