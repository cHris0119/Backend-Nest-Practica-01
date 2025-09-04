import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import { AuthService } from "../auth.service";

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private reflector: Reflector
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const validRoles = this.reflector.get<number[]>('roles', context.getHandler())

        const userId = context.switchToHttp().getRequest().userId
        const user = await this.authService.getUserById(userId)
        const rolesIds = user?.roles.map( role => role.id )

        console.log('validRoles', validRoles)
        console.log('rolesIds', rolesIds)

        if( !validRoles || validRoles.length === 0 ) return true
        
        if( !rolesIds || !validRoles.some( role => rolesIds.includes(role) ) ) {
            throw new ForbiddenException('Insufficient permissions')
        }
        
        return true
        
    }
}