import { Domain } from 'application-domain/app.domain';

export interface AppUseCase {
  getDomain(): Domain;
}

export const AppUseCase = Symbol('AppUseCase');