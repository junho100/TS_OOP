interface IStack {
  presentNode: IStackNode | undefined;
  push(value: number): void;
  pop(): number;
}

interface IStackNode {
  value: number;
  prevNode: IStackNode | undefined;
}

class Stack implements IStack {
  presentNode: IStackNode | undefined;
  constructor() {
    this.presentNode = undefined;
  }

  push = (value: number): void => {
    if (this.presentNode === undefined) {
      this.presentNode = new StackNode(value, undefined);
      return;
    }

    const target = new StackNode(value, this.presentNode);
    this.presentNode = target;
    return;
  };

  pop = (): number => {
    if (this.presentNode === undefined) {
      throw new Error("Empty Stack!");
    }
    console.log(this.presentNode.value);
    const target = this.presentNode.prevNode;
    const val = this.presentNode.value;
    this.presentNode = target;
    return val;
  };
}

class StackNode implements IStackNode {
  value: number;
  prevNode: IStackNode | undefined;

  constructor(value: number, prevNode: IStackNode | undefined) {
    this.value = value;
    this.prevNode = prevNode;
  }
}

const S = new Stack();

S.push(1);
S.push(3);
S.push(2);
S.pop();
S.pop();
