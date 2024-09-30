import react from '@vitejs/plugin-react'
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
			components: '/src/components',
			assets: '/src/assets',
			styles: '/src/styles'
		}
	}
})
