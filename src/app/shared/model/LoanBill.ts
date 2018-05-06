/**
 * 借款申请产生的单据
 */
export class LoanBill {
  public id: number;
  public userName: String;
  public amount: number;
  public duration: number;
  public createTime: number;
  public remark: string;
  public district: string;
  public integrity: number;
  public operatorId: string;
  public operatorName: string;


  constructor(id: number, userName: String, amount: number, duration: number, createTime: number,
              remark: string, district: string, integrity: number, operatorId: string, operatorName: string) {
    this.id = id;
    this.userName = userName;
    this.amount = amount;
    this.duration = duration;
    this.createTime = createTime;
    this.remark = remark;
    this.district = district;
    this.integrity = integrity;
    this.operatorId = operatorId;
    this.operatorName = operatorName;
  }
}
