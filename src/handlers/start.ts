import { Composer } from 'telegraf';

export const startHandler = Composer.command('start', async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        await ctx.reply('Ciao, sono un bot per ascoltare musica e video da youtube nelle chat vocali, il mio sviluppatore è @doggy_cheems, per usarmi nel vostro gruppo scrivete a lui');
        return;
    }

    const [commandEntity] = ctx.message.entities!;
    const text = ctx.message.text.slice(commandEntity.length + 1);

    if (!text) {
        await ctx.reply('Il bot è attivo e funzionante nel gruppo :)');
        return;
    }
}
)
