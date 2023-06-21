import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers() {
    return [
      { nombre: 'Juan', edad: 25, correo: 'juan@example.com' },
      { nombre: 'María', edad: 30, correo: 'maria@example.com' },
      { nombre: 'Carlos', edad: 28, correo: 'carlos@example.com' },
      { nombre: 'Ana', edad: 32, correo: 'ana@example.com' },
      { nombre: 'Pedro', edad: 27, correo: 'pedro@example.com' },
    ];
  }
}
