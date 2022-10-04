import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { SendAnswerDto } from './dtos/send-answer.dto';
import { SendAnswerService } from './services/send-answer.service';

@Controller('answer')
@UseGuards(JwtAuthGuard)
@ApiTags('answer')
export class AnswerController {
  constructor(private readonly sendAnswerService: SendAnswerService) {}

  @ApiOperation({ summary: 'send Answer' })
  @Post()
  async getResultQuestion(@Body() body: SendAnswerDto) {
    return this.sendAnswerService.execute(body);
  }
}
