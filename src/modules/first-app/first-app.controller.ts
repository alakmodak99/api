import { Controller, Get } from '@nestjs/common';

@Controller('first-app')
export class FirstAppController {
    @Get('/')
    getallData(){
        return 'Returning all Data'
    }
}
