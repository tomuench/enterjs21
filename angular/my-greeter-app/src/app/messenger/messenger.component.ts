import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  public messages: string[] = []



  private _newMessage: string = "";

  @Input()
  public set newMessage(v: string) {
    if (v != null && v != "") {
      this._newMessage = v;
      this.addMessage(v);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

  addMessage(m: string) {
    if (m) {
      this.messages.push(m);
    }
  }

}
