export class GreeterInput extends HTMLElement {

    _input = document.createElement("input");
    _button = document.createElement("button");

    constructor() {
        super();
    }

    _emitEvent(message){
        let changeEvent = new CustomEvent("change", { detail: message});
        this.dispatchEvent(changeEvent);
        this._input.value = "";
    }

    connectedCallback() {
        this._input.placeholder = "Bitte hier ihren Text eingeben";
        this._input.type = "text";
        this._input.value = "";

        this._button.innerText = "Senden";
        this._button.addEventListener("click", () => this._emitEvent(this._input.value));

        this.appendChild(this._input);
        this.appendChild(this._button);
    }

}

customElements.define('app-greeter-input', GreeterInput);