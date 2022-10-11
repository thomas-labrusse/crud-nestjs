import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(email: string, password: string): Promise<User>;
    findOne(id: number): Promise<User>;
    find(email: string): Promise<User[]>;
    findAll(): Promise<User[]>;
    remove(id: number): Promise<void>;
    update(id: number, attrs: Partial<User>): Promise<User>;
}
