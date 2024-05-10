import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class StrapShoulderService {
  oneWidth: number = 0;
  oneHeight: number = 0;
  circle: number = 0;
  armholeDepth: number = 0;
  shoulderLength: number = 0;
  shoulderWidth: number = 0;
  armCircle: number = 0;
  bust: number = 0;

  isCounting = false;
  countingData = {
    allLoops: 0,
    pogonWidth: 0,
    front: 0,
    back: 0,
    pogonLengthRanks: 0,
    pogonLengthAdding: 0,

    armHeight: 0,
    armHeightRanks: 0,
    armHeightCut: 0,
    armWidthAdding: 0,

    undercut: 0,
    allCountEnd: 0,
    countBust: 0,
    countSleeve: 0
  };

  count() {
    this.isCounting = false;

    this.countingData.allLoops = Math.round(this.circle * this.oneWidth);
    this.countingData.pogonWidth = Math.round(this.shoulderWidth * this.oneWidth);
    const body = this.countingData.allLoops - 2 * this.countingData.pogonWidth;
    this.countingData.front =  this.countingData.back = body * 0.5;
    this.countingData.pogonLengthRanks = Math.round(this.shoulderLength * this.oneHeight);
    this.countingData.pogonLengthAdding = Math.round(this.shoulderLength * this.oneWidth);

    const armHeight = this.armholeDepth - this.shoulderWidth / 2;
    const howArmCircleAdding = this.armCircle * this.oneWidth;
    this.countingData.armWidthAdding = (howArmCircleAdding - this.countingData.pogonWidth) / 2;
    this.countingData.armHeight = armHeight * this.oneHeight;
    this.countingData.armHeightRanks = Math.round(armHeight * this.oneHeight * 0.7);
    this.countingData.armHeightCut = Math.round(armHeight * this.oneHeight * 0.3);

    this.countingData.undercut = +(howArmCircleAdding / 6).toFixed(3);

    this.countingData.countBust = this.bust * this.oneWidth - 2 * this.countingData.undercut;
    this.countingData.countSleeve = this.armCircle * this.oneWidth - this.countingData.undercut;
    this.countingData.allCountEnd = this.countingData.countBust + this.countingData.countSleeve * 2;

    this.isCounting = true;
  }
}
