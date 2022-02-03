interface IStack {
  readonly size: number;
  presentNode: IStackNode | undefined;
  push(value: number): void;
  pop(): number;
}

interface IStackNode {
  value: number;
  prevNode: IStackNode | undefined;
}

class Stack implements IStack {
  private _size: number;
  get size() {
    return this._size;
  }
  presentNode: IStackNode | undefined;
  constructor() {
    this._size = 0;
    this.presentNode = undefined;
  }

  push = (value: number): void => {
    this._size += 1;
    if (this.presentNode == null) {
      this.presentNode = new StackNode(value, undefined);
      return;
    }

    const target = new StackNode(value, this.presentNode);
    this.presentNode = target;
    return;
  };

  pop = (): number => {
    if (this.presentNode == null) {
      throw new Error("Empty Stack!");
    }
    console.log(this.presentNode.value);
    const target = this.presentNode.prevNode;
    const val = this.presentNode.value;
    this.presentNode = target;
    this._size -= 1;
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
