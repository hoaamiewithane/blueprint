import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { BlueprintsModule } from './blueprints/blueprints.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ScheduleModule.forRoot(), BlueprintsModule, UsersModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
