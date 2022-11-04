import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ArithmeticInputDto, OPERATION_TYPE } from './request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  runArithmetic(@Body() input: ArithmeticInputDto): {
    slackUsername: string;
    result: number;
    operation_type: OPERATION_TYPE;
  } {
    const { operation_type, x, y } = input;
    if (operation_type === OPERATION_TYPE.ADDITION) {
      return {
        slackUsername: 'ayeolakenny',
        result: x + y,
        operation_type,
      };
    } else if (operation_type === OPERATION_TYPE.MULTIPLICATION) {
      return {
        slackUsername: 'ayeolakenny',
        result: x * y,
        operation_type,
      };
    } else if (operation_type === OPERATION_TYPE.SUBTRACTION) {
      return {
        slackUsername: 'ayeolakenny',
        result: x - y,
        operation_type,
      };
    }
  }
}
