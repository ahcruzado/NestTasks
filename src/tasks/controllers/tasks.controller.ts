import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { get } from 'http';

@Controller('api/tasks')
export class TasksController {

    constructor(
        private tasksServices: TasksService
    ){}

    @Get('/')
    getAll(){
        return this.tasksServices.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number){
        return this.tasksServices.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.tasksServices.create(body);
    }


    @Put(':id')
    update(@Param('id') id: number, @Body() body: any){
        return this.tasksServices.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.tasksServices.delete(id);
    }
    // runInThisContext

}
