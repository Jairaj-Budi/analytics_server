import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuardGuard } from 'src/guards/auth_guard/auth_guard.guard';
import { LoggerInterceptor } from 'src/interceptors/logger/logger.interceptor';

@Controller('nest-features')
export class NestFeaturesController {
  @Get('get')
  getTokens(@Req() req, @Res() res) {
    try {
      console.log('Get endpoint started');
      const prefix = req?.prefix;
      return res.send({ prefix: prefix }).status(200);
    } catch (err) {
      console.log(err);
      return res.send({ error: err }).status(500);
    }
  }
  @Post('post')
  setTokens() {
    try {
      console.log('post endpoint started');
    } catch (err) {
      console.log(err);
    }
  }
  @Get('exception')
  sampleException() {
    try {
      throw new Error('Testing exceptions in the nest js');
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.AMBIGUOUS,
          error: 'I am testing the ambigious exception',
        },
        HttpStatus.AMBIGUOUS,
        { cause: err },
      );
    }
  }
  @Get('customValidationErrors/:id')
  setCustomValidationError(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    try {
      console.log(id, 'id');
      return 'customValidation Errors was hit';
    } catch (err) {
      console.log(err);
    }
  }
  @Get('guards')
  @UseGuards(AuthGuardGuard)
  testGuards() {
    return 'Guards are applied and the endpoint is hitted';
  }
  @Get('interceptor')
  @UseInterceptors(LoggerInterceptor)
  testInterceptor() {
    return 'Interceptor is applied and logged';
  }
}
