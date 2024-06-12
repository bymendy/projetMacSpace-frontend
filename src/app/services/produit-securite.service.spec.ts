import { TestBed } from '@angular/core/testing';

import { ProduitSecuriteService } from './produit-securite.service';

describe('ProduitSecuriteService', () => {
  let service: ProduitSecuriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitSecuriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
