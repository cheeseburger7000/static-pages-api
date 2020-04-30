const Idiom = require('../models/Idiom')

const fs = require('fs')
const path = require('path')

const express = require('express')
const router = express.Router()

const csv = require("csvtojson")
const filePath = '../data.csv'

/**
 * 将本地 CSV 封装为 Idioms 对象，并添加到 MongoDB
 */
router.get('/init', async (req, res) => {
    try {
        const csvFile = path.basename('../data/idioms.csv')
        const idioms = await csv({ delimiter: ['|'] }).fromFile(csvFile)
        const result = await Idiom.insertMany(idioms)
        res.json(result)
    } catch (error) {
        console.log(error)
    }
})

/**
 * 获取一条随机格言
 */
router.get('/random', async (req, res) => { // 之前的 /count 请求到 /:num 路径上了...
    try {
        const idiomCount = await Idiom.estimatedDocumentCount()
        const randomUid = Math.floor(Math.random() * idiomCount + 1)
        const idiom = await Idiom.findOne({ uid: randomUid })
        res.json(idiom)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router