import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosService } from './usuarios/usuarios.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuariosModule, UsuariosService, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
