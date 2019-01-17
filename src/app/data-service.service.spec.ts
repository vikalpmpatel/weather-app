import { TestBed } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';

describe('DataServiceService', () => {
  let dataService : DataServiceService
  beforeEach(() => TestBed.configureTestingModule({}));

  it('retrieves all the cars',  () => {
   expect(dataService.getCurrentWeather(PARAMETERS,PARAMETERS)).toBeTruthy();
})
});
