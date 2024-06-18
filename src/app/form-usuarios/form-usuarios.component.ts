import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';
import { User } from '../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/usuarios.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ListaUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.formGroup.patchValue(this.data);
    }
  }

  save(): void {
    if (this.formGroup.valid) {
      const userData = this.formGroup.value;
      if (this.data) {
        userData.id = this.data._id;
        this.userService.editUser(userData).subscribe(
          response => {
            console.log('Usuario actualizado', response);
            this.dialogRef.close(true);
          },
          error => console.error('Error al actualizar usuario', error)
        );
      } else {
        this.userService.addUser(userData).subscribe(
          response => {
            console.log('Usuario agregado', response);
            this.dialogRef.close(true);
          },
          error => console.error('Error al agregar usuario', error)
        );
      }
    }
  }
}