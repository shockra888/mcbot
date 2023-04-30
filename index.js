const mineflayer = require("mineflayer")

const bot = mineflayer.createBot({
    host: 'old_manReyn.aternos.me',
    port: 63483
})

function lookAtPlayer(){
    const Filterplayer =(entity) => entity.type === 'player'
    const playerEntity = bot.nearestEntity(Filterplayer)

    if(!playerEntity) return

    const position = playerEntity.position.offset(0, playerEntity.height, 0)
}

bot.on('physicTick',lookAtPlayer)