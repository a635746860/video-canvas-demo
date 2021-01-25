import { Container, inject, injectable } from 'inversify';

interface CanvasInstanceInterface {
  /** 传入的实例 */
  canvasRef: HTMLCanvasElement;
  /** canvas返回的ctx */
  ctx: CanvasRenderingContext2D;
}

interface DecodeAudioInterface {
  audioCtx: AudioContext;
  audiobuffer: AudioBuffer;
  channelData: Float32Array;
  decode(): Float32Array;
}

const TYPES = Symbol.for('CanvasInstanceInterface');

@injectable()
class CanvasInstance implements CanvasInstanceInterface {
  public canvasRef;
  public ctx;
  private _decodeAudio: any;

  public constructor(
    canvasRef: HTMLCanvasElement,
    @inject(TYPES) decodeAudio: DecodeAudioInterface,
  ) {
    this.canvasRef = canvasRef;
    this.ctx = this.canvasRef.getContext('2d') as CanvasRenderingContext2D;

    this.drawCanvas();
  }

  drawCanvas() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('点击任何处以擦除', 175, 40);
  }

  getInstance() {
    return this.ctx;
  }
}

@injectable()
class DecodeAudio implements DecodeAudioInterface {
  audioCtx;
  audiobuffer;
  channelData;

  constructor() {
    this.audioCtx = new window.AudioContext();
    this.audiobuffer = this.audioCtx.createBuffer(2, 22050, 44100);
    this.channelData = new Float32Array();
  }

  decode() {
    return this.channelData;
  }
}

const videoOOPContainer = new Container()
  .bind<CanvasInstanceInterface>(TYPES)
  .to(CanvasInstance);

export { videoOOPContainer };
