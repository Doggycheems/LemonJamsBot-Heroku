import { Composer } from 'telegraf';
import { skip } from '../tgcalls';

export const skipHandler = Composer.command('skip', ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }

    const skipped = skip(chat.id);
    ctx.reply(skipped ? 'Skippato :)' : "Scemo non c'è nessuna canzone da skippare");
});
