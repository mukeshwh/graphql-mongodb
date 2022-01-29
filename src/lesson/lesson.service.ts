import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepositary: Repository<Lesson>,
    ){}

    async getLesson(id): Promise<Lesson> {
        return this.lessonRepositary.findOne({id});
    }

    async getlessons(): Promise<Lesson[]>{
        return this.lessonRepositary.find();
    }

    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
        const {name, startDate, endDate} = createLessonInput;
        const lesson = this.lessonRepositary.create({
            id: uuid(),
            name,
            startDate,
            endDate
        });
        return this.lessonRepositary.save(lesson);
    }
}
