import { Controller, Get, Post } from '@nestjs/common';
import { StudentService } from '../service/student.service';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  createController() {
    return this.studentService.createService();
  }
}
