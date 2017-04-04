/*
 * Created by YangYusheng on 2017-04-03
 */

import { API_ROOT } from './config'

var apiDaily = {
	startimage: '/4/start-image/1080*1776',
	news: '/4/news/latest',
	newsbyid: '/4/news/',
	newsbydate: '/4/news/before/',
	newsinfo: '/4/story-extra',
	topics: '/4/themes',
	topicbyid: '/4/theme/',
	sections: '/3/sections',
	sectionbyid: '/3/section'
}

export const NewsResource = API_ROOT.concat( apiDaily.news )
export const NewsIdResource = API_ROOT.concat( apiDaily.newsbyid )
export const NewsDateResource = API_ROOT.concat( apiDaily.newsbydate )
export const NewsInfoResource = API_ROOT.concat( apiDaily.newsinfo )
export const TopicsResource = API_ROOT.concat( apiDaily.topics )
export const TopicsIdResource = API_ROOT.concat( apiDaily.topicbyid )
export const SectionsResource = API_ROOT.concat( apiDaily.sections )
export const SectionIdResource = API_ROOT.concat( apiDaily.sectionbyid )
