import { Composer } from 'telegraf';

export const helpHandler = Composer.command('help', async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        await ctx.reply('Hey, sono un bot capace di riprodurre audio di youtube nelle chat vocali di telegram. \n VERSIONE:0.1.0\n DEVELOPER:@doggy_cheems\nSOURCE: la source verra pubblicata su github quando il bot sarà stabile\nINFO: se volete usare questo bot nel vostro gruppo contattate @doggy_cheems');
        return;
    }

    const [commandEntity] = ctx.message.entities!;
    const text = ctx.message.text.slice(commandEntity.length + 1);

    if (!text) {
        await ctx.reply('Hey, sono un bot capace di riprodurre audio di youtube nelle chat vocali di telegram. \n VERSIONE:0.1.0\n DEVELOPER:@doggy_cheems\nSOURCE: la source verra pubblicata su github quando il bot sarà stabile\nINFO: se volete usare questo bot nel vostro gruppo contattate @doggy_cheems');
        return;
    }
}
)
