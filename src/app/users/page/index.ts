import { CreateOrUpdateContainer } from './create-or-update/create-or-update.container';
import { ListContainer } from './list/list.container';

export const containers: any[] = [CreateOrUpdateContainer, ListContainer];

export * from './create-or-update/create-or-update.container';
export * from './list/list.container';
