import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class BlueprintsService {
  constructor(private readonly userService: UsersService) {}
  private readonly logger = new Logger(BlueprintsService.name);
  @Cron(CronExpression.EVERY_5_SECONDS)
  async handleCron() {
    // await this.userService.getUsers();
  }
}
