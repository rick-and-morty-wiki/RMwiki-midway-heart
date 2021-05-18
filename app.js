const https = require('https')

const url = 'https://rickandmortyapi.cavano.vip/character/1'

const jump = () => {
  https.get(url, response => {

    response.on('data', data => data)
    
    response.on('end', () => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log('心跳触发成功')
      } else {
        console.log('心跳触发出错')
      }
    })
  })
}

setInterval(() => {
  jump()
}, 60000);