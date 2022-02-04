{
  interface IStack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  interface IStackNode<T> {
    value: T;
    //타입 통일?
    prevNode: IStackNode<T> | undefined;
  }

  class Stack<T> implements IStack<T> {
    private _size: number;
    get size() {
      return this._size;
    }
    presentNode: IStackNode<T> | undefined;
    constructor() {
      this._size = 0;
      this.presentNode = undefined;
    }

    push = (value: T): void => {
      this._size += 1;
      if (this.presentNode == null) {
        this.presentNode = new StackNode(value, undefined);
        return;
      }

      const target = new StackNode(value, this.presentNode);
      this.presentNode = target;
      return;
    };

    pop = (): T => {
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

  class StackNode<T> implements IStackNode<T> {
    value: T;
    prevNode: IStackNode<T> | undefined;

    constructor(value: T, prevNode: IStackNode<T> | undefined) {
      this.value = value;
      this.prevNode = prevNode;
    }
  }

  const S = new Stack();

  S.push(1);
  S.push("a");
  S.push({ a: "hi" });
  S.pop();
  S.pop();
  S.pop();
}
