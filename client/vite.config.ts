import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		host: true,
		watch: {
			usePolling: true
		}
	},

	plugins: [react()],
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			assets: path.resolve(__dirname, 'src/assets'),
			styles: path.resolve(__dirname, 'src/styles'),
			pages: path.resolve(__dirname, 'src/pages')
		}
	}
})
