import { Controller, Get } from '@nestjs/common';
import { Domain } from 'application-domain/app.domain';
import { AppService } from 'application-service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Domain {
    return this.appService.getDomain();
  }
}
