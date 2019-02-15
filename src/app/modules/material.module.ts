import {NgModule} from '@angular/core';
import {MatSidenavModule,
  MatTableModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [ MatTableModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule,  MatPaginatorModule, MatCardModule
 ],
  exports: [ MatTableModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule,  MatPaginatorModule, MatCardModule
 ]
})
export class MaterialModule {}
