import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { UserService } from './services/user.service'; 
import { UserData } from './interfaces/user-data.interface'; 

@Component({
  selector: 'app-root',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterOutlet,
    MatIconButton,
    MatIcon,
    MatTooltip,
    MatToolbarModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App implements AfterViewInit, OnInit {
  protected title = 'dh-test';
  displayedColumns: string[] = ['id', 'name', 'username', 'website', 'actions'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        alert('Failed to load user data. Please try again later.');
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(row: UserData) {
    alert(`Ver detalles del usuario: ${row.name} (ID: ${row.id})`);
  }
}
