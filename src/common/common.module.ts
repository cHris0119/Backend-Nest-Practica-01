import { Module } from '@nestjs/common';

import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { Roles } from './decorators/roles.decorator';

@Module({
  controllers: [CommonController],
  providers: [CommonService],
  // exports: [Roles]
})
export class CommonModule {}
