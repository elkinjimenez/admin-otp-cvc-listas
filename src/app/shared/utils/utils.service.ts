import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../components/snack-bar/snack-bar.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  @BlockUI() public blockUI!: NgBlockUI;

  constructor(private _snackBar: MatSnackBar) { }

  public openSnackBar(message: string, type: TypesSnackBar = 'INFO', durationInSeconds: number = 8) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      panelClass: `snack-bar-${type}`,
      duration: durationInSeconds * 1000,
      data: { message },
      horizontalPosition: 'right',
    });
  }

}

export declare type TypesSnackBar = 'INFO' | 'SUCCESSS' | 'WARN';
