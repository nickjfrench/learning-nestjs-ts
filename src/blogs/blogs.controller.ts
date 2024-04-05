import { Controller, Get, Post, Param } from '@nestjs/common';
// import { Request } from 'express';

@Controller('blogs')
export class BlogsController {
  @Post()
  create(): string {
    return 'This action creates a blog post.';
  }

  @Get()
  findAll(): string {
    return 'This action returns all blog posts.';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This action returns blog post with id: #${params.id}`;
  }
}
