let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/?apikey=YogGanz', '', 'Dosa➢\nSubscribe : https://youtube.com/channel/UCmUhiytK9WMYaOFgdOho_2g', m)
}
handler.help = ['bkp']
handler.tags = ['asupan']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler


