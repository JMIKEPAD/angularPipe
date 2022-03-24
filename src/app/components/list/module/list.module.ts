import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list.component';
import { CapitalizeFirstPipe } from 'src/app/components/list/pipes/capitalize-first.pipe';
import { SortGenericPipe } from '../pipes/sort-generic.pipe';
import { SortUsersByNamePipe } from '../pipes/sort-users-by-name.pipe';
import { SortUsersByRankingPipe } from '../pipes/sort-users-by-ranking.pipe';




@NgModule({
  declarations: [
    ListComponent,
    CapitalizeFirstPipe,
    SortUsersByRankingPipe,
    SortUsersByNamePipe,
    SortGenericPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListComponent
  ]
})
export class ListModule { }
