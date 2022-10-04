import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { NewGameDto } from './dtos/new-game.dto';
import { FinalizeGameService } from './service/finalize-game.service';
import { FindOneGameService } from './service/find-one-game.service';
import { NewGameService } from './service/new-game.service';

@Controller('game')
@UseGuards(JwtAuthGuard)
@ApiTags('game')
export class GameController {
  constructor(
    private readonly findOneGameService: FindOneGameService,
    private readonly newGameService: NewGameService,
    private readonly finalizeGameService: FinalizeGameService,
  ) {}

  @ApiOperation({ summary: 'getOne Game by Id' })
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.findOneGameService.execute(id);
  }

  @ApiOperation({ summary: 'new Game' })
  @Post()
  async initializeGame(@Body() body: NewGameDto) {
    return this.newGameService.execute(body);
  }

  @ApiOperation({ summary: 'finalize Game by Id' })
  @Patch(':id')
  async finalizeGame(@Param('id') id: string) {
    return this.finalizeGameService.execute(id);
  }
}
