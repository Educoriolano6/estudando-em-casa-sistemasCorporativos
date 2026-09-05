import { Injectable } from '@nestjs/common';
import{JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {UsuariosService, UsuarioAutenticado} from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuariosService: UsuariosService,
        private readonly jwtService: JwtService,
    ) {}
    async validarUsuario(email: string, senha: string) {
      const usuario = this.usuariosService.buscarPorEmail(email);
        if (!usuario || !usuario.ativo){
            return null;
        }
        const senhaValida = await bcrypt.compare(senha, usuario.senhaHash);
        if (!senhaValida){
            return null;
        }
        const {senhaHash, ...principal} = usuario;
        return principal;
    }
    login(usuario: UsuarioAutenticado){
        const payload = {
            sub: usuario.id,
            email: usuario.email,
            papel: usuario.papel,
        };
        return {
            acessToken: this.jwtService.sign(payload),
        };
    }//!PAREI AQUI ANTES DE IR T RABALHARRRRRR!!!!!!
}   //!PAREI AQUI ANTES DE IR T RABALHARRRRRR!!!!!!
