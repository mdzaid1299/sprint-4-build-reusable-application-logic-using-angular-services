import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logMessage(message: string) {
    console.log(message);
  }

  logError(message: string) {
    console.error(message);
  }

  logInfo(message: string) {
    console.info(message);
  }

  logDebug(message: string) {
    // if (!environment.suppressDebugLogs) 
    console.debug(message);
  }

  logWarning(message: string) {
    console.warn(message);
  }

}
