import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import { iProduct } from '../interfaces/Product';
import { newProduct } from '../mockdata/createProduct';
import { mockProductList } from '../mockdata';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('all', () => {
    it('should have "getAll" function', () => {
      expect(service.getAll).toBeTruthy();
    });

    it('should return a collection of users', () => {
      let response: iProduct[] = [];
      spyOn(service, 'getAll').and.returnValue(of(mockProductList));

      service.getAll().subscribe((res) => (response = res));

      expect(response).toEqual(mockProductList);
    });
  });

  describe('create', () => {
    it('should return a new product', () => {
      let result = {};

      spyOn(service, 'create').and.returnValue(of(newProduct));
      service.create(newProduct).subscribe((res) => {
        console.log('res', res);
        result = res;
      });

      expect(result).toEqual(newProduct);
    });
  });

  describe('update', () => {
    it('should update a product', () => {
      let result = {};

      spyOn(service, 'update').and.returnValue(of(newProduct));
      service.update(newProduct).subscribe((res) => {
        result = res;
      });

      expect(result).toEqual(newProduct);
    });
  });

  describe('delete', () => {
    it('should delete a product', () => {
      let result = {};

      spyOn(service, 'delete').and.returnValue(of('Successful delete'));
      service.delete(newProduct).subscribe((res) => {
        result = res;
      });

      expect(result).toEqual('Successful delete');
    });
  });
});
