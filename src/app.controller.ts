import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ArithmeticInputDto, OPERATION_TYPE } from './request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInput() {
    return {
      slackUsername: 'ayeolakenny',
      age: '21',
      backend: true,
      Bio: 'Hi i am ayeolakenny',
    };
  }

  @Post()
  @HttpCode(200)
  runArithmetic(@Body() input: ArithmeticInputDto): {
    slackUsername: string;
    result: number;
    operation_type: OPERATION_TYPE;
  } {
    const { operation_type, x, y } = input;
    if (operation_type === OPERATION_TYPE.ADDITION) {
      return {
        slackUsername: 'ayeolakenny',
        operation_type,
        result: x + y,
      };
    } else if (operation_type === OPERATION_TYPE.MULTIPLICATION) {
      return {
        slackUsername: 'ayeolakenny',
        operation_type,
        result: x * y,
      };
    } else if (operation_type === OPERATION_TYPE.SUBTRACTION) {
      return {
        slackUsername: 'ayeolakenny',
        operation_type,
        result: x - y,
      };
    }
  }
}
