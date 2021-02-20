import { bot } from '../bot';

import { playHandler } from './play';
import { queueHandler } from './queue';
import { pauseHandler } from './pause';
import { skipHandler } from './skip';
import { startHandler } from './start'
import { helpHandler } from './help'
export const initHandlers = (): void => {
    bot.use(playHandler);
    bot.use(queueHandler);
    bot.use(pauseHandler);
    bot.use(skipHandler);
    bot.use(startHandler);
    bot.use(helpHandler);
};
