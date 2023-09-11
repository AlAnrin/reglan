import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SetinCountingService {
  oneWidth: number = 0;
  oneHeight: number = 0;
  hip: number = 0;
  chest: number = 0;
  height: number = 0;
  arm: number = 0;
  shoulderHeight: number = 0;
  shoulder: number = 0;
  neck: number = 0;
  neckHeight: number = 0;

  counting: {
    hip: number,
    chest: number,
    height: number,
    arm: number,
    shoulderHeight: number,
    shoulder: number,
    neck: number,
    neckHeight: number,
    hem: number
  } = {
    hip: 0,
    chest: 0,
    height: 0,
    arm: 0,
    shoulderHeight: 0,
    shoulder: 0,
    neck: 0,
    neckHeight: 0,
    hem: 0
  };

  count() {
    this.counting = {
      hip: this.hip * this.oneWidth,
      chest: this.chest * this.oneWidth,
      height: this.height * this.oneHeight,
      arm: this.arm * this.oneHeight,
      shoulder: this.shoulder * this.oneWidth,
      shoulderHeight: this.shoulderHeight * this.oneHeight,
      neck: this.neck * this.oneWidth,
      neckHeight: this.neckHeight * this.oneHeight,
      hem: 0
    };

    this.counting.hem = (this.counting.chest - this.counting.neck - 2 * this.counting.shoulder) / 2;
    ['hip', 'chest', 'height', 'arm', 'shoulderHeight', 'shoulder', 'neck', 'neckHeight', 'hem'].forEach(field => {
      // @ts-ignore
      this.counting[field] = +(this.counting[field].toFixed(2));
    })
  }
}
