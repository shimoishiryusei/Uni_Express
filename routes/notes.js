var express = require('express');
var router = express.Router();

const responseObjectDataAll = {
    textObject1:{
        id: 1,
        title: 'ノート１のタイトルです',
        subTitle: 'ノート１のサブタイトルです',
        bodyText: 'ノート１の本文です'
    },
    textObject2:{
        id: 2,
        title: 'ノート２のタイトルです',
        subTitle: 'ノート２のサブタイトルです',
        bodyText: 'ノート２の本文です'
    },
};

/** 
 * メモを全権取得するAPT
 * @returns {Object[]} data
 * @returns {number} data.id - メモのID
 * @returns {string} data.title - メモのタイトル
 * @returns {string} data.text - メモの本文
 */
router.get('/', function(req, res, next) {
    // メモの全データを返す
    res.json(responseObjectDataAll);
})

module.exports = router;