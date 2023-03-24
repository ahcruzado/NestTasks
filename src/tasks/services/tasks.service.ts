import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { Repository } from 'typeorm';
import { runInThisContext } from 'vm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task) private taskRepo: Repository<Task>
    ){}

    findAll(){
        return this.taskRepo.find();
    }

    findOne(id: number){
        return this.taskRepo.findOneBy({id:id});
    }

    create(body: any){
        const newTask = this.taskRepo.create(body);

        return this.taskRepo.save(newTask);
    }

    async update(id: number, body: any){
        const task = await this.taskRepo.findOneBy({id:id});
        this.taskRepo.merge(task, body);
        return this.taskRepo.save(task);
    }

    async delete(id: number){
        await this.taskRepo.delete(id);
        return true;
    }
}
