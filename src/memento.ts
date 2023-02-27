class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  public doSomething(): void {
    console.log("Originator: I'm doing something important.");
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  private generateRandomString(length: number): string {
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return Array.apply(null, { length })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join("");
  }

  public save(): Memento {
    return new ConcreteMemeto(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}

interface Memento {
  getState(): string;
  getname(): string;
  getDate(): string;
}

class ConcreteMemeto implements Memento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
  }

  public getState(): string {
    return this.state;
  }

  public getname(): string {
    return `${this.date} / ${this.state.substring(0, 9)}...`;
  }

  public getDate(): string {
    return this.date;
  }
}

class Caretaker {
  private mementos: Memento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log("\nCaretaker: Saving Originator's state...");
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }

    const memento = this.mementos.pop();
    console.log(`Caretaker: Restoring state to: ${memento.getname()}`);
    this.originator.restore(memento);
  }

  public showHistory(): void {
    console.log("Caretaker: Here's the list of mementos:");
    this.mementos.forEach((memento) => console.log(memento.getname()));
  }
}

const originator = new Originator("Super-duper-super-puper-super.");
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log("");
caretaker.showHistory();

console.log("\nClient: Now, let's rollback!\n");
caretaker.undo();

console.log("\nClient: Once more!\n");
caretaker.undo();
