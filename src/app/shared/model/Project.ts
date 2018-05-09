import {InvestRecord, LoanRecord} from './LoanRecord';
import {RepayRecord} from './RepayRecord';

export class Project {
  public id: number;
  public userId: number;
  public userName: String;
  public projectName: string;
  public projectNo: string;
  public projectType: number;  // 收益率
  public projectDetailId: number;
  public amount: number;
  public rateType: number;
  public rateReturn: number;  // 已完成的数量
  public rateMin: number;
  public rateMax: number;
  public duration: number;
  public lowerLimit: number;
  public autoInvest: number;
  public remainder: number;
  public status: number;
  public createTime: number;

  public investRecords: InvestRecord[];
  public repayRecords: RepayRecord[];


  constructor(id: number, userName: String, projectName: string, projectNo: string, amount: number, duration: number, createTime: number) {
    this.id = id;
    this.userName = userName;
    this.projectName = projectName;
    this.projectNo = projectNo;
    this.amount = amount;
    this.duration = duration;
    this.createTime = createTime;
  }
}
