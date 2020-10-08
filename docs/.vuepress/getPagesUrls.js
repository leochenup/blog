const fs = require('fs')
const path = require('path')
const resolve = path.resolve

let filesUrls = []

async function print(path) {
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {
        if (!/.*\.[A-Za-z_]+/.test(dirent.name) && dirent.name !== '.vuepress'
            && dirent.name !== 'CNAME' && dirent.name !== 'assets'
            && dirent.name !== 'categories'
            && dirent.name !== 'fonts'
            && dirent.name !== 'icons'
            && dirent.name !== 'img'
            && dirent.name !== 'timeline'
            && dirent.name !== 'tag') {
            await print(path + '/' + dirent.name)
        } else {
            if (dirent.name !== '.DS_Store' && dirent.name !== '.vuepress') {
                filesUrls.push(path + '/' + dirent.name)
            }
        }

    }
}


async function fun(path) {
    console.log(path)
    await print(path).catch(function (err) {
        console.log(err)
    });
    return filesUrls
}


fun(__dirname + '/dist')


setTimeout(function () {
    module.exports = filesUrls
}, 10000)





