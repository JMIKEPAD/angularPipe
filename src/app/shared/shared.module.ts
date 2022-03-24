import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { SortGenericPipe } from './pipes/sort-generic.pipe';
import { SortUsersByNamePipe } from './pipes/sort-users-by-name.pipe';
import { SortUsersByRankingPipe } from './pipes/sort-users-by-ranking.pipe';



@NgModule({
  declarations: [
    CapitalizeFirstPipe,
    SortUsersByRankingPipe,
    SortUsersByNamePipe,
    SortGenericPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CapitalizeFirstPipe,
    SortGenericPipe,
    SortUsersByNamePipe,
    SortUsersByRankingPipe
  ]
})
export class SharedModule { }
