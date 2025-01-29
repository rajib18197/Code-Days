interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  private events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number | undefined {
    return this.data[propName as keyof UserProps];
  }

  set(updateProps: UserProps): void {
    Object.assign(this.data, updateProps);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((cb) => cb());
  }

  fetch(): void {
    fetch(`http:\\localhost:3000/users/${this.get("id")}`)
      .then((res: Response) => res.json())
      .then((data) => {
        this.set(data);
      });
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      fetch(`http:\\localhost:3000/users/${this.get("id")}`, {
        method: "PUT",
        body: { ...this.data },
      });
    } else {
      fetch(`http:\\localhost:3000/users`, {
        method: "POST",
        body: this.data,
      });
    }
  }
}
