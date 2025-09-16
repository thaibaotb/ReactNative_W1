class Logger {
    private static instance: Logger;
  
    private constructor() {}
  
    static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    log(message: string) {
      console.log(`[LOG]: ${message}`);
    }
  }
  
  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();
  
  logger1.log("App started");
  console.log("Same instance:", logger1 === logger2);
  