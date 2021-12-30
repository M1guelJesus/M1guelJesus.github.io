import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueI18n({include: path.resolve(__dirname, './locales/**'), globalSFCScope: true,})
	],
	server: {
		port: parseInt(process.env.VITE_PORT) || 8080,
		cors: true,
		strictPort: true,
		hmr: true,
		proxy: {
		  "^/graphql": {
			target: process.env.VITE_API_URL || "http://127.0.0.1:8000",
			changeOrigin: true,
			rewrite: (path) => path.replace(/^\/graphql/, "/graphql"),
			ws: true,
		  },
		},
		watch: {
		  usePolling: true,
		  useFsEvents: true,
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
})
