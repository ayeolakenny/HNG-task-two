import { IsEnum, IsNumber } from 'class-validator';

export enum OPERATION_TYPE {
  SUBTRACTION = 'subtraction',
  ADDITION = 'addition',
  MULTIPLICATION = 'multiplication',
}

export class ArithmeticInputDto {
  @IsEnum(OPERATION_TYPE, { each: true })
  operation_type: OPERATION_TYPE;
  @IsNumber()
  x: number;
  @IsNumber()
  y: number;
}
