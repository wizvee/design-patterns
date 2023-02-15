class RemoteControl {
    constructor(device) {
        this.device = device;
    }
    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        }
        else {
            this.device.enable();
        }
    }
    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10);
    }
    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }
    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }
    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }
}
class AdvancedRemoteControl extends RemoteControl {
    mute() {
        this.device.setVolume(0);
    }
}
class Tv {
    constructor() {
        this.isEnable = false;
        this.volume = 0;
        this.channel = 0;
    }
    isEnabled() {
        return this.isEnable;
    }
    enable() {
        console.log("TV 전원 On");
        this.isEnable = true;
    }
    disable() {
        console.log("TV 전원 Off");
        this.isEnable = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(percent) {
        this.volume = percent;
        console.log(`TV volume ${this.volume}으로 설정`);
    }
    getChannel() {
        return this.channel;
    }
    setChannel(channel) {
        this.channel = channel;
        console.log(`TV channel ${this.channel}으로 설정`);
    }
}
class Radio {
    constructor() {
        this.isEnable = false;
        this.volume = 0;
        this.channel = 0;
    }
    isEnabled() {
        return this.isEnable;
    }
    enable() {
        console.log("Radio 전원 On");
        this.isEnable = true;
    }
    disable() {
        console.log("Radio 전원 Off");
        this.isEnable = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(percent) {
        this.volume = percent;
        console.log(`Radio volume ${this.volume}으로 설정`);
    }
    getChannel() {
        return this.channel;
    }
    setChannel(channel) {
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
