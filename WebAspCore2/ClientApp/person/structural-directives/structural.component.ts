import { Component, OnInit } from '@angular/core';
import { StudentModel } from "../model/StudentModel";

@Component({
    selector: 'app-structural',
    templateUrl: 'structural.component.html',
    styleUrls: [ 'structural.component.css']
})
export class StructuralComponent implements OnInit {
    ngOnInit(): void {
        this.studentsList.push(new StudentModel('First', '11hjhjhjh', 27));
        this.studentsList.push(new StudentModel('Last', '33hj23hjhjh', 17));
        this.studentsList.push(new StudentModel('Middle', '4hjhjhjh', 47));
    }
    checkBoxValue = true

    studentsList: StudentModel[] = [];

    switchValue = 2;

}