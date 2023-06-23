import { defineStore } from 'pinia'
export const musicStore = defineStore({
	id: 'musicStore',
	state: () => ({
		count: 0,
		songs: [
			{
				id: '27591651',
				title: 'Intro AE 86',
				singer: '陈光荣',
				album: '頭文字[イニシャル]D THE MOVIE SOUND TUNE',
				cover:
					'http://p4.music.126.net/9KeyafHLjadqSQTRS_tN5Q==/5741649720318487.jpg',
				src: 'http://music.163.com/song/media/outer/url?id=27591651.mp3',
				time: 149000,
				mv: '',
				Lyric: '',
				liked: false,
				Favorite: false,
			},
			{
				id: '409872504',
				title: 'Ninelie',
				singer: 'Aimer',
				album: 'ninelie EP',
				cover:
					'http://p3.music.126.net/g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241.jpg',
				src: 'http://music.163.com/song/media/outer/url?id=409872504.mp3',
				time: 260675,
				mv: '',
				Lyric: '',
				liked: false,
				Favorite: false,
			},
		],
		currentIndex: 0,
		playedSongs: [],
	}),
	actions: {
		inc() {
			this.count++
		},
		updateSongs(param) {
			this.songs[this.currentIndex] = Object.assign(
				this.songs[this.currentIndex],
				{ ...param }
			)
		},
		toggleLike(song) {
			const index = this.songs.indexOf(song)
			if (index !== -1) {
				this.songs[index].liked = !this.songs[index].liked
			}
		},
		toggleFavorite(song) {
			const index = this.songs.indexOf(song)
			if (index !== -1) {
				this.songs[index].Favorite = !this.songs[index].Favorite
			}
		},
		// 在更新歌曲索引时将当前歌曲加入到 playedSongs 列表中
		setCurrentIndex(index) {
			this.playedSongs.push({
				song: this.songs[this.currentIndex],
				playedAt: new Date(),
			})
			this.currentIndex = index
		},
	},
	persist: {
		enabled: true,
		strategies: [
			{
				paths: ['songs'],
				storage: localStorage,
			},
		],
	},
})
