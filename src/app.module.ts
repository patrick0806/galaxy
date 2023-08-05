import { Module } from "@nestjs/common";

import { NestModule } from "@modules/nest/nest.module";

@Module({
  imports: [NestModule],
})
export class AppModule {}
