export class Project {
  public id: number;
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


  constructor(id: number, projectName: string, projectNo: string, projectType: number, amount: number, duration: number) {
    this.id = id;
    this.projectName = projectName;
    this.projectNo = projectNo;
    this.projectType = projectType;
    this.amount = amount;
    this.duration = duration;
  }
}
