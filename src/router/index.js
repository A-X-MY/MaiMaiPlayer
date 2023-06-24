import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
	{
		path: '/',
		component: () => import('@/pages/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/musiclibrary',
		component: () => import('@/pages/musiclibrary/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/mv',
		component: () => import('@/pages/mv/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/mv/:id',
		name: "mv",
		component: () => import('@/pages/mv/[id].vue'),
	},
	{
		path: '/songList',
		component: () => import('@/pages/songList/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/theme',
		component: () => import('@/pages/theme/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/search',
		component: () => import('@/pages/search/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/playList',
		component: () => import('@/pages/playListDetail/index.vue'),
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/currentPlaylist',
		component: () => import('@/pages/currentPlaylist/index.vue'),
		meta: {
			keepAlive: true
		}
	},

]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router
