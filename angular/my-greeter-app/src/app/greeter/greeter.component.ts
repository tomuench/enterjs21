import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  public lastMessage: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  sendEventRecieved(value: string) {
    this.lastMessage = value;
  }

}
