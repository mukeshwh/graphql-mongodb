import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';


import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';


@Resolver(of => StudentType)
export class StudentResolver{

    constructor(
        private studentService: StudentService,
    ){

    }

    @Query(returns => StudentType)
    async student(
        @Args('id') id: string
    ){
        return this.studentService.student(id);
    }

    @Query(returns => [StudentType])
    async students(){
        return this.studentService.students();
    }

    @Mutation(returns => StudentType)
    async createStudent(
        @Args('createStudentInput') CreateStudentInput: CreateStudentInput
    ){
        return this.studentService.createStudent(CreateStudentInput);
    }
}