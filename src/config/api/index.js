/*
 * Created by YangYusheng on 2017-04-03
 */
import axios from 'axios'
import news from '@/components/mock/daily_list'
import themes from '@/components/mock/daily_themes'
import {
	NewsResource,
	NewsIdResource,
	NewsDateResource,
	NewsInfoResource,
	TopicsResource,
	TopicsIdResource,
	SectionsResource,
	SectionIdResource
} from './resource'

export default {
	getNews() {
		return axios.get( NewsResource )
		// return  setPromise(news)
	},
	getNewsById(id) {
		return axios.get(NewsIdResource + id)
	},
	getNewsByDate(date) {
		return axios.get(NewsDateResource + date)
	},
	getNewsInfoById(id) {
		return axios.get(NewsInfoResource, {
			params: {
				id: id
			}
		})
	},
	getTopics() {
		return axios.get(TopicsResource)
		// return setPromise(themes);
	}
}

const setPromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}