export class GraphView {
  root: HTMLElement;

  elements: GraphElement[];

  constructor(element: HTMLElement) {
    this.root = element;
    this.elements = [];
  }

  addSimpleElement(title: string, body: string) {
    const elm = GraphElement.createSimpleElement(title, body);
    this.elements.push(elm);
    this.root.appendChild(elm.root);
  }
};

export class GraphElement {
  root: HTMLElement;

  constructor(element: HTMLElement) {
    this.root = element;
  }

  static createSimpleElement(title: string, body: string) {
    const root = document.createElement("div");
    const elm_title = document.createElement("div");
    const elm_body = document.createElement("div");
    root.classList.add("graphview-element");
    elm_title.classList.add("graphview-title");
    elm_body.classList.add("graphview-body");
    elm_title.textContent = title;
    elm_body.textContent = body;
    root.appendChild(elm_title);
    root.appendChild(elm_body);
    return new GraphElement(root);
  }
};
