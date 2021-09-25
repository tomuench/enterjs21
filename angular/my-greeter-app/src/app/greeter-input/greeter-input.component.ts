import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-greeter-input',
  templateUrl: './greeter-input.component.html',
  styleUrls: ['./greeter-input.component.css']
})
export class GreeterInputComponent implements OnInit {
  
  @Output()
  public sendEvent = new EventEmitter<string>();

  private _value : string = "";

  public get value() : string {
    return this._value;
  }
  public set value(v : string) {
    this._value = v;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Versand des Greeter-Inputs
   */
  public send() {
    this.sendEvent.emit(this.value);
  }

}
