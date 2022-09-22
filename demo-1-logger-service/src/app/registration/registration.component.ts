import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  name: string = "";
  email: string = "";
  contactNo: string = "";

  status: boolean = true;

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  register() {
    this.logger.logMessage('Registering User....');

    this.logger.logDebug(`Name Input: ${this.name}`);
    this.logger.logDebug(`Email Input: ${this.email}`);
    this.logger.logDebug(`Contact No Input: ${this.contactNo}`);
    
    if(this.name === '' || this.email === '' || this.contactNo === '') {
      this.logger.logError('User Registration Failed')
    }
    else
      this.logger.logInfo(`User ${this.name} Registered`);
  }


}
