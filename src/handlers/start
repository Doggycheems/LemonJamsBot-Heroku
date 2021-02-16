import { Composer } from 'telegraf';
import { addToQueue } from '../tgcalls';

export const startHandler = Composer.command('start', async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        await ctx.reply('Ciao, sono un bot per ascoltare musica nelle chat vocali di telegram, il mio creatore è @doggy_cheems, per usarmi nel tuo gruppo chiedi a lui, per sapere come funziono usa /help.');
        return;
    }

    const [commandEntity] = ctx.message.entities!;
    const text = ctx.message.text.slice(commandEntity.length + 1);

    if (!text) {
        await ctx.reply('Ciao, sono un bot per ascoltare musica nelle chat vocali di telegram, il mio creatore è @doggy_cheems, per usarmi nel tuo gruppo chiedi a lui');
        return;
    }

    const index = await addToQueue(chat, text);

    await ctx.reply(index === 0 ? 'Bot attivo nel gruppo ✔ se non dovesse funzionare assicuratevi di non aver mutato l'userbot e di avere le chat vocali impostate bene, se ancora non funzionasse chiedete a t.me/doggy_cheems.' : `Bot attivo nel gruppo ✔ se non dovesse funzionare assicuratevi di non aver mutato l'userbot e di avere le chat vocali impostate bene, se ancora non funzionasse chiedete a t.me/doggy_cheems.`);
});
