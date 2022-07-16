let handler = async m => m.reply(`
            .✵.DONASI.✵.

            GOPAY : 0895396162714
            DANA : 0895396162714
            PULSA : 0895396162714
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
