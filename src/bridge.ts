class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  public togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  public volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  public volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  public channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  public channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

class AdvancedRemoteControl extends RemoteControl {
  public mute(): void {
    this.device.setVolume(0);
  }
}

interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

class Tv implements Device {
  isEnable: boolean = false;
  volume: number = 0;
  channel: number = 0;

  public isEnabled(): boolean {
    return this.isEnable;
  }

  public enable(): void {
    console.log("TV 전원 On");
    this.isEnable = true;
  }

  public disable(): void {
    console.log("TV 전원 Off");
    this.isEnable = false;
  }

  public getVolume(): number {
    return this.volume;
  }
  public setVolume(percent: number): void {
    this.volume = percent;
    console.log(`TV volume ${this.volume}으로 설정`);
  }

  public getChannel(): number {
    return this.channel;
  }

  public setChannel(channel: number): void {
    this.channel = channel;
    console.log(`TV channel ${this.channel}으로 설정`);
  }
}

class Radio implements Device {
  isEnable: boolean = false;
  volume: number = 0;
  channel: number = 0;

  public isEnabled(): boolean {
    return this.isEnable;
  }

  public enable(): void {
    console.log("Radio 전원 On");
    this.isEnable = true;
  }

  public disable(): void {
    console.log("Radio 전원 Off");
    this.isEnable = false;
  }

  public getVolume(): number {
    return this.volume;
  }
  public setVolume(percent: number): void {
    this.volume = percent;
    console.log(`Radio volume ${this.volume}으로 설정`);
  }

  public getChannel(): number {
    return this.channel;
  }

  public setChannel(channel: number): void {
    this.channel = channel;
    console.log(`Radio channel ${this.channel}으로 설정`);
  }
}

const tv = new Tv();
const remoteTv = new RemoteControl(tv);
remoteTv.togglePower();
remoteTv.channelUp();

const radio = new Radio();
const remoteRadio = new AdvancedRemoteControl(radio);
remoteRadio.volumeUp();
remoteRadio.mute();
