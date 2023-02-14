import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subject} from "rxjs";

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
    reglanLengthRanks: number,
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
    reglanLengthRanks: 0,
    undercut: 0,
    allCountEnd: 0,
    countBust: 0,
    countSleeve: 0
  };

  currentCountBust = 146;
  currentCountSleeve = 48;
  currentReglanLength = 15;

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

    const armNotAdd = countReglan - countAddingArm / 2;
    const armCoof = Math.floor(armNotAdd / (countAddingBody / 2) + 1);
    let armRem = 0;
    while (Math.floor((armNotAdd - armRem) / armCoof) !== Math.floor(countAddingArm / 2 - armRem)) {
      armRem += 1;

      if (armRem >= countAddingArm) {
        this.snack.open('Ошибка при попытке расчитать прибавки на рукав!');
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

    const bodyNotAdd = countReglan - countAddingBody / 2;
    const bodyCoof = Math.floor(bodyNotAdd / (countAddingBody / 2) + 1);
    let bodyRem = 0;
    while (Math.floor((bodyNotAdd - bodyRem) / bodyCoof) !== Math.floor(countAddingBody / 2 - bodyRem)) {
      bodyRem += 1;

      if (bodyRem >= countAddingBody) {
        this.snack.open('Ошибка при попытке расчитать прибавки на тело!');
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
