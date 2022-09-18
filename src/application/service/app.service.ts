import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Domain } from 'application-domain/app.domain';
import { IAppUseCase } from 'ports-usecase/app.usecase';

@Injectable()
export class AppService implements IAppUseCase {
  getDomain(): Domain {
    return new Domain(uuidv4(), 'Domain Name');
  }
}
