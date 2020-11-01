# Static Pages API

This project provides API services for my GitHub Pages.

## API Services

- [x] 随机格言
- [x] 微博热搜
- [ ] 数据报表

## References

- [csvtojson](https://www.npmjs.com/package/csvtojson)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [MongoDB Cheat Sheet](https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6)
- [cheerio](https://github.com/cheeriojs/cheerio)
- [Puppeteer](https://github.com/puppeteer/puppeteer)

## MongoDB Cheat Sheet

The MongoDB CMD used by the project.

```
docker run --name mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo

docker exec -it mongo /bin/bash 

mongo -u admin -p admin

// 创建库
use default

show dbs

db.createUser({
    "user": "shaohsiung",
    "pwd": "shaohsiung",
    "roles": [
        { "role": "readWrite", "db": "default" }
    ]
})

show users

db.idioms.insert({
  body: 'Stay hungry. Stay foolish.',
  author: '史蒂夫.乔布斯'
})

db.idioms.find()
```

## See also

- [How to build a web crawler with Node](https://blog.logrocket.com/how-to-build-a-web-crawler-with-node/)
- [How to make a Web crawler using Java?](https://www.programcreek.com/2012/12/how-to-make-a-web-crawler-using-java/)
- [Express + Node 爬取网站数据](https://blog.csdn.net/sinat_36065456/article/details/81670330)
- [Java实现微博爬虫的思路](https://blog.csdn.net/qq_31122833/article/details/91570539)
- [Writing A Web Crawler in Golang](https://edmundmartin.com/writing-a-web-crawler-in-golang/)
- [Java Web Crawler Libraries - stackoverflow](https://stackoverflow.com/questions/11282503/java-web-crawler-libraries)
