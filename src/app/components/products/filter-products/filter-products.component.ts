import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime, delay, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css'],
})
export class FilterProductsComponent {
  private readonly searchSubject = new Subject<string>();
  private searchSubscription?: Subscription;

  constructor(private searchService: ApiService) {}

  public ngOnInit(): void {
  //   this.searchSubscription = this.searchSubject
  //     .pipe(
  //       debounceTime(300),
  //       distinctUntilChanged(),
  //       switchMap((searchQuery) => {
  //         if (searchQuery === undefined || searchQuery || searchQuery.length === 0) {
  //           return of([]);
  //         }
      
  //         const result = this.productList?.filter(({ name, description }) =>
  //           `${name} ${description}`.toLowerCase().includes(searchQuery.toLowerCase())
  //         );
      
  //         return of(result).pipe(delay(1000));
  //       }
  //     )
  //     .subscribe((results) => (this.searchResults = results));
  }

  public onSearchQueryInput(event: Event): void {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchSubject.next(searchQuery?.trim());
  }
}
