import {logger, consoleTransport} from 'react-native-logs';

const config = {
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
      debug: 'magenta',
    },
  },
};

export const log = logger.createLogger(config);
