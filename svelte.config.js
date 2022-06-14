import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
			crawl: true
		}
	},
	vite: {
		optimizeDeps: {
		  include: ["highlight.js", "highlight.js/lib/core"]
		}
	}
};

export default config;
