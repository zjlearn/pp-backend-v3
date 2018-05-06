import {Injectable} from '@angular/core';
import {Result} from '../model/Result';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LoanBill} from '../model/LoanBill';

@Injectable()
export class LoanBillService {

  public loanBills: LoanBill [];

  constructor(private http: HttpClient) {

  }

  getLoanBill(id: number): Observable<LoanBill> {
    return this.http.get<Result>('http://localhost:4200/xhr/user/login').map<Result, LoanBill>(ret => ret.data);
  }

  getLoanBills(): LoanBill[] {
    return mockLoanBills;
  }
}

const mockLoanBills = [
  new LoanBill(1, '张三', 123, 2, 45233543, '资金周转', '武汉', 50, '1234', '李四')
];
