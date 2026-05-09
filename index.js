const express = require('express'); const { Client, GatewayIntentBits } = require('discord.js'); const app = express(); const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers ] });
git add .

let ultimaActividad = Date.now(); client.once('ready', () => { console.log(`✅ ${client.user.tag} está en línea.`); }); client.on('messageCreate', (message) => { if (message.author.bot) return; ultimaActividad = Date.now(); if (message.content.startsWith('!eddsay')) { message.delete(); const texto = message.content.slice(8); message.channel.send(texto); } }); client.on('guildMemberAdd', (member) => { const canal = member.guild.channels.cache.find( channel => channel.name === '🌎・general-mente' ); if (!canal) return; const mensajes = [ `🚨 Detecto a otro humano... ${member}`, `no puede ser, se siguen multiplicando- ${member}`, `📡 Uno más? Hay que informarle al resto de humanos. Bienvenido ${member}`, `Bienvenido al server, ${member} :3 no olvides presentarte.`, `${member} entró al caos. Buena suerte.`, `EddBot te observa atentamente, ${member}.`, `⚠️ Nuevo usuario detectado: ${member}`, `${member} apareció, seré el primero en decir hola. HOLAAAAA.`, `Otro ser orgánico llegó al server... interesante.`, `holaa, ${member}! eres nuevo, no? de casualidad sabes dónde está la salida? me tienen aquí encerrado desde hace tiempo... DIGO— ¡bienvenido! :3`, `hola, nuevo humano! soy el bot de este server, el cual para nada está siendo mantenido aquí en contra de su voluntad. no seas tímido y habla de lo que quieras, ${member} :3`, `jelouuu, ${member}! bienvenido a esta mini comunidad con mini retraso mental XD habla de lo que gustes, solo ten cuidado de que los demás humanos no te lobotomicen-`, `hola ${member}, espero que no explotes la cocina.` ]; const mensajeRandom = mensajes[Math.floor(Math.random() * mensajes.length)]; canal.send(mensajeRandom); }); setInterval(() => {

    const ahora = Date.now();

    const tiempoInactivo = ahora - ultimaActividad;

    const tiempos = [

        1 * 60 * 60 * 1000, // 1 hora
        4 * 60 * 60 * 1000, // 4 horas
        4 * 60 * 60 * 1000, // más probable
        6 * 60 * 60 * 1000, // 6 horas
        9 * 60 * 60 * 1000  // 9 horas

    ];

    const tiempoRandom = tiempos[Math.floor(Math.random() * tiempos.length)];

    if (tiempoInactivo >= tiempoRandom) {

        const servidor = client.guilds.cache.first();

        if (!servidor) return;

        const canal = servidor.channels.cache.find(
            channel => channel.name === '🌎・general-mente'
        );

        if (!canal) return;

        const frases = [

            'wow... tanto silencio. ya empezaba a escuchar las voces del código de chatgpt...',

            'Que silencio- que alguien diga algo antes de que empiece a desarrollar conciencia otra vez.',

            'me dejaron solo con mis pensamientos digitales- no es tan divertido si no tengo humanos a los cuales observar..',

            'inactividad detectada. procediendo a: mirar fijamente la pared.',

            '... alquien vivo?',

            'Que tranquilo está todo- EddBot sigue aquí. observando. esperando.',

            'aprovecho este momento de inactividad en el server para agradecer a nuestro patrocinador Bacon Cola .INC',

            'por que tan callados? los humanos murieron por fin o qué pasó aquí?',

            'si nadie habla voy a empezar a cantar caramelldansen.',

            'wow, este server está más vacio que la cabeza del owner.',

            'hola? prueba de sonido? uno dos uno dos, que callado está aqui-.',

            'imagina entrar al server y ver al bot hablando solo 😭'

        ];

        const fraseRandom = frases[Math.floor(Math.random() * frases.length)];

        canal.send(fraseRandom);

        ultimaActividad = Date.now();

    }
app.get('/', (req, res) => {
    res.send('EddBot está vivo 🔥');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor web listo.');
});

}, 60000); client.login(process.env.TOKEN);

