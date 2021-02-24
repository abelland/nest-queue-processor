import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
    }),
  ],
  controllers: [AudioController],
  providers: [
    {
      provide: AudioProcessor,
      useFactory: () => {
        return new AudioProcessor();
      },
    },
  ],
})
export class AudioModule {}
