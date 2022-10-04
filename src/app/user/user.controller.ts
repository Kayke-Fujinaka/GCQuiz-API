import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { UpdateResult } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateUserService } from './services/create-user.service';
import { FindAllUserService } from './services/find-all-user.service';
import { FindOneUserService } from './services/find-one-user.service';
import { RemoveUserService } from './services/remove-user.service';
import { UpdateUserService } from './services/update-user.service';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly findOneUserService: FindOneUserService,
    private readonly removeUserService: RemoveUserService,
    private readonly findAllUserService: FindAllUserService,
    private readonly updateUserService: UpdateUserService,
  ) {}

  @ApiOperation({ summary: 'getAll Users' })
  @Get()
  async getAll(): Promise<User[]> {
    return this.findAllUserService.execute();
  }

  @ApiOperation({ summary: 'getOne User by Id' })
  @Get(':id')
  async getOne(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.findOneUserService.execute(id);
  }

  @ApiOperation({ summary: 'create User' })
  @ApiResponse({ status: 400, description: 'E-mail já cadastrado' })
  @Post()
  async create(@Body() data: CreateUserDto): Promise<User> {
    return this.createUserService.execute(data);
  }

  @ApiOperation({ summary: 'update User by Id' })
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateUserDto,
  ): Promise<UpdateResult> {
    return this.updateUserService.execute(id, body);
  }

  @ApiOperation({ summary: 'delete User by Id' })
  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<UpdateResult> {
    return this.removeUserService.execute(id);
  }
}
