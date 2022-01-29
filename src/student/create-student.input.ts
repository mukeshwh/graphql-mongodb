import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';


@InputType()
export class CreateStudentInput {
    @MinLength(1)
    @Field()
    first_name: string;

    @MinLength(1)
    @Field()
    last_name: string;
}