import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [TaskModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
