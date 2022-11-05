class Validator {
    data: number | string | boolean | void | null | undefined;

    constructor(data: any) {
        this.data = data;
    }
}

class StringValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "string") {
            super(data);
            console.log(typeof data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

class NumberValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "number") {
            super(data);
            console.log(typeof data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

class BooleanValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "boolean") {
            super(data);
            console.log(typeof data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

class EmailInput extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const input = document.createElement("input");
        input.addEventListener("change", () => {
            new RegexValidator(input.value);
        });
        shadow.appendChild(input);
    }
}

class RegexValidator extends StringValidator {
    constructor(data: string) {
        super(data);
        let re = /^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim;
        if (!re.test(data)) {
            throw new Error("O formato está errado");
        }
    }
}

customElements.define("email-input", EmailInput);
