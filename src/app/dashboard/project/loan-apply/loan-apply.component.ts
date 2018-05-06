import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {LoanBill} from '../../../shared/model/LoanBill';
import {LoanBillService} from '../../../shared/service/LoanBillService';

/**
 * 对借款申请进行管理
 */
@Component({
  selector: 'app-loan-apply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.css']
})
export class LoanApplyComponent implements OnInit {
  loanBills: LoanBill[];
  displayedColumns = ['id', 'userName', 'amount', 'duration', 'createTime', 'reason', 'integrity', 'operation'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private  loanBillService: LoanBillService) {
  }

  ngOnInit() {
    this.loanBills = this.loanBillService.getLoanBills();
    this.dataSource = new MatTableDataSource(this.loanBills);
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
