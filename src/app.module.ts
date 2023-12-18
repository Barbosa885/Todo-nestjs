import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TaskModule, TagModule],
})

export class AppModule {}
