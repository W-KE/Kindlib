import User from '../../types/user';

export default class UserService {
  constructor() {
    this.users = [];
    const user = new User('admin', '12345');
    user.id = 1;
    this.users.push(user);
  }

  userExist(username) {
    const usersresult = this.users.filter((user) => user.username === username);
    if (usersresult.length > 0) {
      return true;
    }
    return false;
  }

  findUser(username) {
    return this.users.find((user) => user.username === username);
  }
}
