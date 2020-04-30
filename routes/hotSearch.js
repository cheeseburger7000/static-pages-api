const express = require('express')
const router = express.Router()

const cheerio = require('cheerio') // https://www.npmjs.com/package/cheerio
const axios = require('axios');

// 微博热搜 Content-Type text/html
router.get('/', async (req, res) => {
    try {
        let lis = []
        const { data } = await axios.get('https://s.weibo.com/top/summary')
        const $ = cheerio.load(data)
        $('.list .list_a li').each(function (i, elm) {
            const linkNode = $(this).children('a')
            let link = linkNode.attr('href')
            link = `https://s.weibo.com${link}`

            let keyword = linkNode.children('span')
            keyword = keyword.text().replace(keyword.find('em').text(), '').trim()

            let rank = linkNode.children('strong')
            if (rank.length < 1) {
                rank = '置顶'
            } else {
                rank = rank.text()
            }

            lis.push(`<li><em>${rank}</em> <a href='${link}'>${keyword}</a></li>`)
        })

        let result = `<ul>${lis.join('')}</ul>`
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})

// 微博热搜 Content-Type json
router.get('/v2', async (req, res) => {
    try {
        let list = []
        const { data } = await axios.get('https://s.weibo.com/top/summary')
        const $ = cheerio.load(data)
        $('.list .list_a li').each(function(i, elm) {
            const linkNode = $(this).children('a')
            let link = linkNode.attr('href')
            link = `https://s.weibo.com${link}`

            let keyword = linkNode.children('span')
            keyword = keyword.text().replace(keyword.find('em').text(), '').trim()

            let rank = linkNode.children('strong')
            if (rank.length < 1) {
                rank = '置顶'
            } else {
                rank = rank.text()
            }

            list.push({ rank, link, keyword })
        })
        res.json(list)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router