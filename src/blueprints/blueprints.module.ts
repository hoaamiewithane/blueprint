import { Module } from '@nestjs/common';
import { BlueprintsService } from './blueprints.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [BlueprintsService],
})
export class BlueprintsModule {}
