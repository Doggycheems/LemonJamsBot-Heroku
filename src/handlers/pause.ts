import { Composer } from 'telegraf';
import { pause } from '../tgcalls';

export const pauseHandler = Composer.command(['pausa', 'riprendi'], async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }

    const paused = await pause(chat.id);
    const message = paused === null ? "Coglione non c'è nessuna musica attiva." : paused ? 'Musica messa in pausa❌.' : 'Musica ripresa✔.';

    await ctx.reply(message);
});
