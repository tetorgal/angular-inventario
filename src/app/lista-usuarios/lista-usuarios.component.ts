import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/usuarios.service';
import { User } from '../models/user';
import { MatTableDataSource } from '@angular/material/table';
import { FormProductosComponent } from '../form-productos/form-productos.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarEliminarComponent } from '../confirmar-eliminar/confirmar-eliminar.component';
import { FormUsuariosComponent } from '../form-usuarios/form-usuarios.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  filterValue: string = '';
  userList: User[] = []
  columnsHeader = ["username", "name", "email", "phone", "status", "opciones"];
  dataSource = new MatTableDataSource<User>();
  constructor(private userService: UserService, private dialog: MatDialog) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    try {
      this.userService.getUsers()
        .subscribe(items => {
          this.userList = items;
          this.dataSource.data = this.userList; // Actualizar la fuente de datos
        });
    } catch (error) {
      console.log(error);
    }
  }

  userListMethod() {
    try {
      this.userService.getUsers()
        .subscribe(items => {
          this.userList = items;
          this.dataSource.data = this.userList; // Actualizar la fuente de datos
        });
    } catch (error) {
      console.log(error);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormUsuariosComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      if (result) {
        this.userListMethod(); // o this.getProduct();
      }
    });
  }

  deleteDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmarEliminarComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      if (result) {
        this.deleteUser(id)
      }
    });
  }

  deleteUser(id: string) {
    try {
      this.userService.delete(id).subscribe(item => console.log(item))
      this.userListMethod();

    } catch (error) {

    }
  }

  editDialog(element: User) {
    const dialogRef = this.dialog.open(FormUsuariosComponent, {
      data: element,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      if (result) {
        this.userListMethod();
      }
    });
  }

}