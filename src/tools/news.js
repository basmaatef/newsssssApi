const news = (callback)=>{
    const request = require('request');
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-01-19&sortBy=publishedAt&apiKey=97b693fd51ae4e81942e25557047987f'
    request({url,json:true},(error,response)=>{
        if(error){
            callback('error in url can not find ',undefined)
        }
        else if(response.body.message){
            callback(response.body.message,undefined)
        }
        else if(response.body.articles.length == 0){
            callback('no data found',undefined)
        }
        else{
            callback(undefined,response.body.articles)
        }
    })
}

module.exports = news