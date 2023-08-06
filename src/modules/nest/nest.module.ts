import { Module } from "@nestjs/common";

import { CreateRestAPICommand } from "./contexts/createRestAPI/createRestAPI.command";
import { CreateRestAPIService } from "./contexts/createRestAPI/createRestAPI.service";
import { CreateRestRouteCommand } from "./contexts/createRestRoute/createRestRoute.command";
import { CreateRestRouteService } from "./contexts/createRestRoute/createRestRoute.service";

@Module({
  providers: [
    CreateRestAPICommand,
    CreateRestRouteCommand,
    CreateRestAPIService,
    CreateRestRouteService,
  ],
})
export class NestModule {}
