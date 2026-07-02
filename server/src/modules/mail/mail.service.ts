import { Injectable } from '@nestjs/common';
import { MailData } from './mail.interface';
import { MaybeType } from '../shared/shared.types';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';
import { MailerService } from '../mailer/mailer.service';
import path from 'path';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService<AllConfigType>,
  ) {}
  async userSignUp(mailData: MailData<{ hash: string }>): Promise<void> {
    let emailConfirmTitle: MaybeType<string> = 'Confirm Email';
    let text1: MaybeType<string> = 'Hey!';
    let text2: MaybeType<string> = "You're almost ready to start enjoying";
    let text3: MaybeType<string> =
      'Simply click the big green button below to verify your email address.';

    const url = new URL(
      this.configService.getOrThrow('app.frontendDomain', {
        infer: true,
      }) + '/confirm-email',
    );
    url.searchParams.set('hash', mailData.data.hash);

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: emailConfirmTitle,
      text: `${url.toString()} ${emailConfirmTitle}`,
      templatePath: path.join(
        this.configService.getOrThrow('app.workingDirectory', {
          infer: true,
        }),
        'src',
        'modules',
        'mail',
        'mail-templates',
        'activation.hbs',
      ),
      context: {
        title: emailConfirmTitle,
        url: url.toString(),
        actionTitle: emailConfirmTitle,
        app_name: this.configService.get('app.name', { infer: true }),
        text1,
        text2,
        text3,
      },
    });
  }
}
