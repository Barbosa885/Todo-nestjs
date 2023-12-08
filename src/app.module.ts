import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TaskModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
