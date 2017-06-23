'use strict';

import { bookshelf } from '../../config/database';

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});

const Users = bookshelf.Collection.extend({
	model : User
});

export {
  Users, User
};
