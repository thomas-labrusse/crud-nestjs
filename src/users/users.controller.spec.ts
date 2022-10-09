import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';

describe('Users Controller', () => {
  let mockUsersService: Partial<UsersService>;
  let usersController: UsersController;

  beforeEach(async () => {
    mockUsersService = {
      findAll: () => {
        return Promise.resolve([
          { id: 1, email: 'test@test.com', password: 'qsdf' } as User,
        ]);
      },
      findOne: (id: number) => {
        return Promise.resolve({
          id,
          email: 'test@test.com',
          password: 'test',
        } as User);
      },
      find: (email: string) => {
        return Promise.resolve([{ id: 2, email, password: 'qsdf' } as User]);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    }).compile();
    usersController = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array with all users', async () => {
      const users = await usersController.findAll();
      expect(users).toEqual([
        {
          id: 1,
          email: 'test@test.com',
          password: 'qsdf',
        },
      ]);
    });
  });
  describe('findOne', () => {
    it('should return a single user', async () => {
      const user = await usersController.findOne('2');
      expect(user).toBeDefined();
    });
    it('should throw an error if user with given id is not found', async () => {
      mockUsersService.findOne = () => null;

      await expect(usersController.findOne('1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
