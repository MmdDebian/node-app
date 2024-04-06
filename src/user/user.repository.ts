import { BaseAbstractRepository } from "src/common/repository/base.repository";
import { User } from "./entities/user.entity";

export class UserRepository extends BaseAbstractRepository<User>{
    find(filter?: { email?: string; name?: string }):User[]{
        if (!filter) {
          return super.find();
        }
    
        let users = super.find();
        if (filter.email) {
          users = users.filter(user => user.email === filter.email);
        }
        if (filter.name) {
          users = users.filter(user => user.name === filter.name);
        }
    
        return users;
      }
}