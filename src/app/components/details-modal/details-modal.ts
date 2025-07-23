import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserData } from '../../interfaces/user-data.interface';

@Component({
  selector: 'app-details-modal',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './details-modal.html',
  styleUrl: './details-modal.scss'
})
export class DetailsModal {
  constructor(
    public dialogRef: MatDialogRef<DetailsModal>,
    @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
