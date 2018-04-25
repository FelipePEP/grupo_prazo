export class User {


    name = '';
    email = '';
    isAdmin = '';
    password = '';
    id = '';

    saveUser() { }
    updateUser() { }
    deleteUser() { }

    getUserByLogin(email, password) {
        try {
            const users = JSON.parse(localStorage.userList);
            const ut = users.find((u) => u.email === email && u.password === password);
            this.setUser(ut);
            return this;
        } catch (error) {
            return error.message;
        }
    }

    setUser(obj) {
        this.name = obj.name;
        this.email = obj.email;
        this.isAdmin = obj.isAdmin;
        this.password = obj.password;
        this.id = obj.id;
    }
}
