export class GreeterMessenger extends HTMLElement {

    _lastMessage = "";
    _messages = [];
    _list = document.createElement("ul");

    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(this._list);
    }

    _renderMessage(message) {
        let li = document.createElement("li");
        li.innerText = message;
        this._list.appendChild(li)
    }


    addMessage(message) {
        if(message !== null && message !== undefined && message !== "" &&  message !== this._lastMessage){
            this._lastMessage = message;
            this._messages.push(message);
            this._renderMessage(message);
        }
    }

}

customElements.define('app-messenger', GreeterMessenger);