import { Field, ObjectType } from '@nestjs/graphql';
import { Student } from './student.entity';

@ObjectType('Student')
export class StudentType {
    @Field()
    id: string;

    @Field()
    first_name: string;

    @Field()
    last_name: string;
}