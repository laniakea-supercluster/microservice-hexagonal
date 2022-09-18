import { Domain } from 'application-domain/app.domain';

export interface IAppUseCase {
  getDomain(): Domain;
}
