import { GreeterInput } from "../greeter-input/greeter-input";
import { GreeterMessenger } from "../messenger/messenger";

export class Greeter extends HTMLElement {

    _greeterInput = new GreeterInput();
    _greeterMessenger = new GreeterMessenger();

    constructor() {
        super();
    }

    connectedCallback() {
        this._greeterInput.addEventListener("change", (event) => {
            this._greeterMessenger.addMessage(event.detail);
        })
        this.appendChild(this._greeterInput);
        this.appendChild(this._greeterMessenger);
    }

}

customElements.define('app-greeter', Greeter);