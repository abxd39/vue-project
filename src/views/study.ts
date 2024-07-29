

class User {
    public name: string;
    public age: number;
    public email: string;

    constructor(data: any) {
        this.name = data.name;
        this.age = data.age;
        this.email = data.email;
    }

    public isAdult(): boolean {
        return this.age >= 18;
    }
}
async function fetchUser01(): Promise<User> {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data as User;
}

async function fetchUser(): Promise<User> {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return new User(data);
}