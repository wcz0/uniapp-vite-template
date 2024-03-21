import { defineConfig, loadEnv } from 'vite'
import path from 'node:path'
import Uni from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import useUniManifest from '@uni-helper/vite-plugin-uni-manifest'
import useUniMiddleware from '@uni-helper/vite-plugin-uni-middleware'
import useEslint from 'vite-plugin-eslint'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isProxy = env.UNI_PLATFORM === 'h5'
  return {
    plugins: [
      UniPages({
        onAfterScanPages(ctx) {
          // console.log('onAfterScanPages.ctx', ctx)
          // TODO 禁用合并自动扫描到的pages
          ctx.pagesPathInfo = []
          return ctx
        },
      }),
      useUniManifest(),
      useUniMiddleware(),
      Uni(),
      Unocss(),
      useEslint(),
    ],
    server: {
      host: true,
      port: env.VITE_PORT,
      proxy: {
        ...(isProxy && env.VITE_APP_URL
          ? {
            /** 解决本地测试跨域问题 */
            [`${env.VITE_PROXY_PATH}`]: {
              target: env.VITE_APP_URL,
              changeOrigin: true,
              rewrite: (path) => path.replace(new RegExp(`^${env.VITE_PROXY_PATH}`), ''),
            },
          }
          : {}),
        // 解决开发环境上传图片无法直接显示的问题
        '/data/img': {
          target: env.VITE_APP_URL,
        },
        '/temp': {
          target: env.VITE_APP_URL,
        },
      },
    },
    build: {
      assetsDir: 'static',
      outDir: path.join('dist', env.VITE_PUBLIC_PATH),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
    // define: {
    //   'process.env': {},
    // },
  }
})
