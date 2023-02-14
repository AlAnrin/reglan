import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CountingService {
  oneWidth: number = 2.5;
  oneHeight: number = 3.5;
  circle: number = 58;
  reglanCount: 1 | 2 | 3 = 2;
  deepeningBack: number = 4;
  deepeningFront: number = 10;
  armholeDepth: number = 24;
  shoulderLength: number = 10;
  armCircle: number = 30
  bust: number = 95;

  isCounting = false;
  counting: {
    front: number,
    sleeve: number,
    reglan: number,
    countDownFront: number,
    countDownBack: number,
    reglanLength: number,
    undercut: number,
    allCountEnd: number,
    countBust: number,
    countSleeve: number,
  } = {
    front: 0,
    reglan: 0,
    sleeve: 0,
    countDownBack: 0,
    countDownFront: 0,
    reglanLength: 0,
    undercut: 0,
    allCountEnd: 0,
    countBust: 0,
    countSleeve: 0
  };

  countTypesettingEdge(): void {
    let allCount = Math.round(this.circle * this.oneWidth);
    if (Math.floor(allCount % 2) !== 0) {
      allCount -= 1;
    }

    allCount = allCount - this.reglanCount * 4;

    let sleeve = Math.round(allCount / 6) - this.reglanCount;
    if (Math.floor(sleeve % 2) !== 0) {
      sleeve -= 1;
    }

    let frontandback = allCount - 2 * sleeve;
    let front = Math.round(frontandback / 2);

    const cat1 = this.armholeDepth - this.circle / 6;
    let reglanLength = Math.pow(cat1, 2) + Math.pow(this.shoulderLength, 2);
    reglanLength = Math.round(Math.sqrt(reglanLength));

    const undercut = Math.round(this.armCircle / 4);

    const countBust = this.bust * this.oneWidth - 2 * undercut;
    const countSleeve = this.armCircle * this.oneWidth - undercut;
    const allCountEnd = countBust + countSleeve * 2;

    this.counting = {
      front,
      sleeve,
      reglan: this.reglanCount,
      countDownFront: Math.round(this.deepeningFront * this.oneHeight),
      countDownBack: Math.round(this.deepeningBack * this.oneHeight),
      reglanLength,
      undercut,
      allCountEnd,
      countBust,
      countSleeve
    };
    this.isCounting = true;
  }
}
