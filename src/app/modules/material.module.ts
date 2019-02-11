import {NgModule} from '@angular/core';
import {MatSidenavModule,
  MatTableModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule} from '@angular/material';

@NgModule({
  imports: [ MatTableModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule,  MatCardModule,
 ],
  exports: [ MatTableModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule,
    MatListModule,  MatCardModule,
 ]
})
export class MaterialModule {}
