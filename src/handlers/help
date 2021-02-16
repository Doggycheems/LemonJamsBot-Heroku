import { Composer } from 'telegraf';
import { addToQueue } from '../tgcalls';

export const helpHandler = Composer.command('help', async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        await ctx.reply('Ciao, sono un bot in beta per riprodurre musica da youtube nelle chat vocali di telegram, attualmente sono alla versione: 0.1.1 Beta, i miei comandi sono elencati appena scrivi / in una chat dove sono presente, buon divertimenti :));
        return;
    }

    const [commandEntity] = ctx.message.entities!;
    const text = ctx.message.text.slice(commandEntity.length + 1);

    if (!text) {
        await ctx.reply('Coglione devi darmi un link youtube.');
        return;
    }

    const index = await addToQueue(chat, text);

    await ctx.reply(index === 0 ? 'Avvio la canzone...' : `Queued at position ${index}.`);
});
