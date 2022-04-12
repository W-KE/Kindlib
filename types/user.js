import moment from 'moment';
import bcrypt from 'bcrypt';

export default class User {
  id;

  createdDate;

  deletedDate;

  constructor(username, password) {
    this.username = username;
    this.passwordHash = bcrypt.hashSync(password, 10);
    this.createdDate = moment(moment.now).format();
  }

  async isValidPassword(password) {
    return bcrypt.compare(password, this.passwordHash);
  }
}
