export class Timeout {
  timer!: number;
  clear() {
    clearTimeout(this.timer);
  }
  set(f: () => void, ms: number){
    this.timer = setTimeout(f, ms);
  }
}