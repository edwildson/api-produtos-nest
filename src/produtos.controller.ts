import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from './produto.model';
import { ProdutosService } from "./produtos.service";


@Controller('produtos')
export class ProdutosController {
    constructor(private produtosService: ProdutosService) {

    }


    @Get()
    async getAll(): Promise<Produto[]> {
        return this.produtosService.getAll();
    }


    @Get(':id')
    async getOne(@Param() params): Promise<Produto> {
        return this.produtosService.getOne(params.id);
    }


    @Post()
    async create(@Body() produto: Produto) {
        this.produtosService.create(produto);
    }


    @Put()
    async update(@Body() produto: Produto): Promise<[number, Produto[]]> {
        return this.produtosService.update(produto);
    }


    @Delete(':id')
    async destroy(@Param() params) {
        this.produtosService.destroy(params.id);
    }
}