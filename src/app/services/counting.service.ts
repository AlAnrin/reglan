import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CountingService {
  oneWidth: number = 0;
  oneHeight: number = 0;
  reglanType: 3 | 8 | 9 = 9;
  circle: number = 0;
  reglanCount: 1 | 2 | 3 = 2;
  deepeningBack: number = 0;
  deepeningFront: number = 0;
  armholeDepth: number = 0;
  shoulderLength: number = 0;
  armCircle: number = 0;
  bust: number = 0;

  isCounting = false;
  counting: {
    front: number,
    back: number,
    sleeve: number,
    reglan: number,
    countDownFront: number,
    countDownBack: number,
    reglanLength: number,
    reglanLengthRanks: number,
    undercut: number,
    allCountEnd: number,
    countBust: number,
    countSleeve: number,
  } = {
    front: 0,
    back: 0,
    reglan: 0,
    sleeve: 0,
    countDownBack: 0,
    countDownFront: 0,
    reglanLength: 0,
    reglanLengthRanks: 100,
    undercut: 0,
    allCountEnd: 0,
    countBust: 330,
    countSleeve: 117
  };

  currentCountBust = 218;
  currentCountSleeve = 49;
  currentReglanLength = 31;

  reglanArrayBody: string[] = [];
  reglanArrayArm: string[] = [];

  countArray = new Subject();

  constructor(private snack: MatSnackBar) {
  }

  countTypesettingEdge(): void {
    let allCount = Math.round(this.circle * this.oneWidth);
    if (Math.floor(allCount % 2) !== 0) {
      allCount -= 1;
    }

    allCount = allCount - this.reglanCount * 4;

    let sleeve = 0;
    let front = 0;
    let back = 0;

    switch (this.reglanType) {
      case 3:
        front = +(allCount / 3).toFixed(3);
        back = +(allCount / 3).toFixed(3);
        sleeve = +(allCount / 6).toFixed(3);
        break;
      case 8:
        front = +((3 * allCount) / 8).toFixed(3);
        back = +((3 * allCount) / 8).toFixed(3);
        sleeve = +(allCount / 8).toFixed(3);
        break;
      case 9:
        front = +((4 * allCount) / 9).toFixed(3);
        back = +((3 * allCount) / 9).toFixed(3);
        sleeve = +(allCount / 9).toFixed(3);
    }

    // let sleeve = Math.round(allCount / 6) - this.reglanCount;
    // if (Math.floor(sleeve % 2) !== 0) {
    //   sleeve -= 1;
    // }

    // let frontandback = allCount - 2 * sleeve;
    // let front = Math.round(frontandback / 2);

    const cat1 = this.armholeDepth - this.circle / 6;
    let reglanLength = Math.pow(cat1, 2) + Math.pow(this.shoulderLength, 2);
    reglanLength = Math.round(Math.sqrt(reglanLength));

    const undercut = +(this.armCircle / 4).toFixed(3);

    const countBust = this.bust * this.oneWidth - 2 * undercut;
    const countSleeve = this.armCircle * this.oneWidth - undercut;
    const allCountEnd = countBust + countSleeve * 2;

    this.counting = {
      front,
      back,
      sleeve,
      reglan: this.reglanCount,
      countDownFront: Math.round(this.deepeningFront * this.oneHeight),
      countDownBack: Math.round(this.deepeningBack * this.oneHeight),
      reglanLength,
      reglanLengthRanks: reglanLength * this.oneHeight,
      undercut,
      allCountEnd,
      countBust,
      countSleeve
    };
    this.isCounting = true;
  }

  countRanks(): void {
    this.countArray.next(false);
    let countAddingArm = Math.floor(this.counting.countSleeve - this.currentCountSleeve);
    if (countAddingArm % 2 !== 0) {
      countAddingArm -= 1;
    }
    let countAddingBody = Math.floor(this.counting.countBust / 2 - this.currentCountBust / 2);
    if (countAddingBody % 2 !== 0) {
      countAddingBody -= 1;
    }
    const countReglan = Math.floor(this.counting.reglanLengthRanks - this.currentReglanLength);

    let armNotAdd = countReglan - countAddingArm / 2;
    const armCoof = Math.floor(armNotAdd / (countAddingArm / 2) + 1);
    let armRem = 0;
    while (Math.floor((armNotAdd - armRem) / armCoof) !== Math.floor(countAddingArm / 2 - armRem)) {
      armRem += 1;

      if (armRem >= countAddingArm) {
        this.snack.open('Ошибка при попытке расчитать прибавки на рукав!', undefined, {duration: 5000});
        return;
      }
    }

    const R = 'Р';
    const T = 'Т';
    const zero = '0';
    this.reglanArrayArm = new Array(countReglan);

    let iterationRem = 0;
    while (armRem !== 0) {
      const currCorf = armCoof - 1;
      this.reglanArrayArm[iterationRem] = R;
      for (let i = iterationRem; i < currCorf + iterationRem; i++) {
        this.reglanArrayArm[i + 1] = zero;
      }
      iterationRem = iterationRem + currCorf + 1;
      armRem--;
    }
    while (iterationRem < countReglan) {
      this.reglanArrayArm[iterationRem] = R;
      for (let i = iterationRem; i < armCoof + iterationRem; i++) {
        this.reglanArrayArm[i + 1] = zero;
      }
      iterationRem = iterationRem + armCoof + 1;
    }

    let bodyNotAdd = countReglan - countAddingBody / 2;
    const bodyCoof = Math.floor(bodyNotAdd / (countAddingBody / 2) + 1);
    let bodyRem = 0;
    while (Math.floor((bodyNotAdd - bodyRem) / bodyCoof) !== Math.floor(countAddingBody / 2 - bodyRem)) {
      bodyRem += 1;

      if (bodyRem >= countAddingBody) {
        this.snack.open('Ошибка при попытке расчитать прибавки на тело!', undefined, {duration: 5000});
        return;
      }
    }

    this.reglanArrayBody = new Array(countReglan);
    iterationRem = 0;
    while (bodyRem !== 0) {
      const currCorf = bodyCoof - 1;
      this.reglanArrayBody[iterationRem] = T;
      for (let i = iterationRem; i < currCorf + iterationRem; i++) {
        this.reglanArrayBody[i + 1] = zero;
      }
      iterationRem = iterationRem + currCorf + 1;
      bodyRem--;
    }
    while (iterationRem < countReglan) {
      this.reglanArrayBody[iterationRem] = T;
      for (let i = iterationRem; i < bodyCoof + iterationRem; i++) {
        this.reglanArrayBody[i + 1] = zero;
      }
      iterationRem = iterationRem + bodyCoof + 1;
    }
    this.countArray.next(true);
  }
}
