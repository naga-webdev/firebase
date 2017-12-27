import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, AngularFireAction } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  filter$: BehaviorSubject<string|null>;
  specialFilter$: BehaviorSubject<any>;
  
  constructor(private db: AngularFireDatabase) {
    this.filter$ = new BehaviorSubject(null);
    this.items$ = this.filter$.switchMap(size =>
      this.db.list('/hotels', ref =>
        size ? ref.orderByChild('rating').equalTo(size) : ref
      ).snapshotChanges()
    );
    
  }
  filterByRating(rating: string|null) {
    this.filter$.next(rating);
    this.items$ = this.filter$.switchMap(rating =>
      this.db.list('/hotels', ref =>
      rating ? ref.orderByChild('rating').equalTo(rating) : ref
      ).snapshotChanges()
    );
  }

  filterByLocation(location: string|null){
    this.filter$.next(location);
    this.items$ = this.filter$.switchMap(location =>
      this.db.list('/hotels', ref =>
      location ? ref.orderByChild('location').equalTo(location) : ref
      ).snapshotChanges()
    );
  }

  filterByRatingAndLocation(rating,location){
    this.specialFilter$.next({rating: rating, location: location});
    this.items$ = this.specialFilter$.switchMap(location =>
      this.db.list('/hotels', ref =>
      location ? ref.orderByChild('location').equalTo(location) : ref
      ).snapshotChanges()
    );
  }

  ngOnInit() {
    
  }

}
