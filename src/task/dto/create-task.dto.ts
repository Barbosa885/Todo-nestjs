import { IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

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

  @IsString({ each: true })
  tags: string[]
}
