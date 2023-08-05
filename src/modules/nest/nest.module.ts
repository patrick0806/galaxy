import { Module } from "@nestjs/common";

import { CreateRestAPICommand } from "./contexts/createRestAPI/createRestAPI.command";
import { CreateRestAPIService } from "./contexts/createRestAPI/createRestAPI.service";

@Module({
  providers: [CreateRestAPICommand, CreateRestAPIService],
})
export class NestModule {}
