import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber } from "class-validator";

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;

  @IsNumber()
  @IsOptional()
  tagId: number;
}

