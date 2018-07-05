webpackJsonp(["timesheets.module"],{

/***/ "../../../../../src/app/timesheets/actions/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APPROVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APPROVE_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return SUBMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return SUBMIT_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RESUBMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RESUBMIT_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REQUEST_TO_UNLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return REQUEST_TO_UNLOCK_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_PERIODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GET_PERIODS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GET_Tasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GET_Tasks_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GET_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GET_USERS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
/* unused harmony export ADD_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return EDIT; });
/* unused harmony export EDIT_COMPLETE */
/* unused harmony export CHANGE_STATUS */
/* unused harmony export CHANGE_STATUS_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GetCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GetPeriodAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GetPeriodCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GetTasksAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return GetTasksCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return GetUsersAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return GetUsersCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DeleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EditAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return EditCompleteAction; });
/* unused harmony export ChangeStatusAction */
/* unused harmony export ChangeStatusCompleteAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ApproveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ApproveCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return SubmitAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return SubmitCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return ReSubmitAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return ReSubmitCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return ToUnlockAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return ToUnlockCompleteAction; });
var APPROVE = '[Timesheets] Approve Timesheets';
var APPROVE_COMPLETE = '[Timesheets] Approve Timesheets Complete';
var SUBMIT = '[Timesheets] Submit Timesheets';
var SUBMIT_COMPLETE = '[Timesheets] Submit Timesheets Complete';
var RESUBMIT = '[Timesheets] Resubmit Timesheets';
var RESUBMIT_COMPLETE = '[Timesheets] Resubmit Timesheets Complete';
var REQUEST_TO_UNLOCK = '[Timesheets] Request to Unlock Timesheets';
var REQUEST_TO_UNLOCK_COMPLETE = '[Timesheets] Request to Unlock Timesheets Complete';
var GET = '[Timesheets] Get Timesheets';
var GET_COMPLETE = '[Timesheets] Get Timesheets Complete';
var GET_PERIODS = '[Timesheets] Get periods';
var GET_PERIODS_COMPLETE = '[Timesheets] Get periods Complete';
var GET_Tasks = '[Timesheets] Get Tasks';
var GET_Tasks_COMPLETE = '[Timesheets] Get Tasks Complete';
var GET_USERS = '[Timesheets] Get Users';
var GET_USERS_COMPLETE = '[Timesheets] Get Users Complete';
var ADD = '[Timesheets] Add time line';
var ADD_COMPLETE = '[Timesheets] Add time line Complete';
var DELETE = '[Timesheets] Delete time line';
var EDIT = '[Timesheets] Edit time line';
var EDIT_COMPLETE = '[Timesheets] Edit time line Complete';
var CHANGE_STATUS = '[Timesheets] Change status';
var CHANGE_STATUS_COMPLETE = '[Timesheets] Change status Complete';
var GetAction = (function () {
    function GetAction(payload) {
        this.payload = payload;
        this.type = GET;
    }
    return GetAction;
}());

var GetCompleteAction = (function () {
    function GetCompleteAction(payload) {
        this.payload = payload;
        this.type = GET_COMPLETE;
    }
    return GetCompleteAction;
}());

var GetPeriodAction = (function () {
    function GetPeriodAction(payload) {
        this.payload = payload;
        this.type = GET_PERIODS;
    }
    return GetPeriodAction;
}());

var GetPeriodCompleteAction = (function () {
    function GetPeriodCompleteAction(payload) {
        this.payload = payload;
        this.type = GET_PERIODS_COMPLETE;
    }
    return GetPeriodCompleteAction;
}());

var GetTasksAction = (function () {
    function GetTasksAction(payload) {
        this.payload = payload;
        this.type = GET_Tasks;
    }
    return GetTasksAction;
}());

var GetTasksCompleteAction = (function () {
    function GetTasksCompleteAction(payload) {
        this.payload = payload;
        this.type = GET_Tasks_COMPLETE;
    }
    return GetTasksCompleteAction;
}());

var GetUsersAction = (function () {
    function GetUsersAction(payload) {
        this.payload = payload;
        this.type = GET_USERS;
    }
    return GetUsersAction;
}());

var GetUsersCompleteAction = (function () {
    function GetUsersCompleteAction(payload) {
        this.payload = payload;
        this.type = GET_USERS_COMPLETE;
    }
    return GetUsersCompleteAction;
}());

var AddAction = (function () {
    function AddAction(payload) {
        this.payload = payload;
        this.type = ADD;
    }
    return AddAction;
}());

var DeleteAction = (function () {
    function DeleteAction(payload) {
        this.payload = payload;
        this.type = DELETE;
    }
    return DeleteAction;
}());

var EditAction = (function () {
    function EditAction(payload) {
        this.payload = payload;
        this.type = EDIT;
    }
    return EditAction;
}());

var EditCompleteAction = (function () {
    function EditCompleteAction(payload) {
        this.payload = payload;
        this.type = EDIT_COMPLETE;
    }
    return EditCompleteAction;
}());

var ChangeStatusAction = (function () {
    function ChangeStatusAction(payload) {
        this.payload = payload;
        this.type = CHANGE_STATUS;
    }
    return ChangeStatusAction;
}());

var ChangeStatusCompleteAction = (function () {
    function ChangeStatusCompleteAction(payload) {
        this.payload = payload;
        this.type = CHANGE_STATUS_COMPLETE;
    }
    return ChangeStatusCompleteAction;
}());

var ApproveAction = (function () {
    function ApproveAction(payload) {
        this.payload = payload;
        this.type = APPROVE;
    }
    return ApproveAction;
}());

var ApproveCompleteAction = (function () {
    function ApproveCompleteAction(payload) {
        this.payload = payload;
        this.type = APPROVE_COMPLETE;
    }
    return ApproveCompleteAction;
}());

var SubmitAction = (function () {
    function SubmitAction(payload) {
        this.payload = payload;
        this.type = SUBMIT;
    }
    return SubmitAction;
}());

var SubmitCompleteAction = (function () {
    function SubmitCompleteAction(payload) {
        this.payload = payload;
        this.type = SUBMIT_COMPLETE;
    }
    return SubmitCompleteAction;
}());

var ReSubmitAction = (function () {
    function ReSubmitAction(payload) {
        this.payload = payload;
        this.type = RESUBMIT;
    }
    return ReSubmitAction;
}());

var ReSubmitCompleteAction = (function () {
    function ReSubmitCompleteAction(payload) {
        this.payload = payload;
        this.type = RESUBMIT_COMPLETE;
    }
    return ReSubmitCompleteAction;
}());

var ToUnlockAction = (function () {
    function ToUnlockAction(payload) {
        this.payload = payload;
        this.type = REQUEST_TO_UNLOCK;
    }
    return ToUnlockAction;
}());

var ToUnlockCompleteAction = (function () {
    function ToUnlockCompleteAction(payload) {
        this.payload = payload;
        this.type = REQUEST_TO_UNLOCK_COMPLETE;
    }
    return ToUnlockCompleteAction;
}());

//# sourceMappingURL=timesheets.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timesheets_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/components/timesheets/timesheets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_HttpLoaderFactory__ = __webpack_require__("../../../../../src/app/services/HttpLoaderFactory.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__timesheets_timesheets__["a" /* TimesheetsComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_8__services_HttpLoaderFactory__["a" /* HttpLoaderFactory */],
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS,
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/components/timesheets/timesheets.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8 push-md-2\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        {{ 'TimesheetHeader' | translate }}\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group row\">\r\n          <h5 class=\"col-md-2 timego-center\">{{ 'Period' | translate }}</h5>\r\n          <select [(ngModel)]=\"selectModel.periodId\" class=\"form-control col-md-4\">\r\n            <option [value]=\"period.Id\" *ngFor=\"let period of periods\">{{period.PeriodStart | date: ('DateWeekFormat' | translate)}} {{ 'To' | translate }} {{period.PeriodEnd | date: ('DateWeekFormat' | translate)}}</option>\r\n          </select>\r\n          <div class=\"col-md-3\" *ngIf=\"isLoaded && timesheets != null\">\r\n            <span *ngIf=\"timesheets.LockStatus == 'Unlocked'\" class=\"badge badge-success timego-status\" style=\"float:right; font-size:20px;margin-right: 16px;\">\r\n              <i class=\"fa fa-unlock\"></i> {{timesheets.LockStatus}}\r\n            </span>\r\n            <span *ngIf=\"timesheets.LockStatus == 'Locked'\" class=\"badge badge-danger timego-status\" style=\"float:right; font-size:20px;margin-right: 16px;\">\r\n              <i class=\"fa fa-lock\"></i> {{timesheets.LockStatus}}\r\n            </span>\r\n            <span *ngIf=\"timesheets.LockStatus == 'Request to unlock'\" class=\"badge badge-warning timego-status\" style=\"float:right; font-size:20px;margin-right: 16px;\">\r\n              <i class=\"fa fa-unlock-alt\"></i> {{timesheets.LockStatus}}\r\n            </span>\r\n          </div>\r\n          <div class=\"col-md-3\" *ngIf=\"isLoaded && timesheets != null\">\r\n            <span *ngIf=\"timesheets.ApprovalStatus == 'Waiting for Approval'\" class=\"badge badge-warning timego-status\" style=\"float:right; font-size:20px;margin-right: 16px;\">\r\n              <i class=\"fa fa-history\"></i> {{timesheets.ApprovalStatus}}\r\n            </span>\r\n            <span *ngIf=\"timesheets.ApprovalStatus == 'Approved'\" class=\"badge badge-success timego-status\" style=\"float:right; font-size:20px;margin-right: 16px;\">\r\n              <i class=\"fa fa-check\"></i> {{timesheets.ApprovalStatus}}\r\n            </span>\r\n            <span *ngIf=\"timesheets.ApprovalStatus == 'Submitted'\" class=\"badge badge-default timego-status\" style=\"float:right; font-size:20px;margin-right: 16px;\">\r\n              <i class=\"fa fa-send\"></i> {{timesheets.ApprovalStatus}}\r\n            </span>\r\n            <span *ngIf=\"timesheets.ApprovalStatus == 'Requesting Resubmit'\" class=\"badge badge-default timego-status\" style=\"float:right; font-size:20px;margin-right: 16px;\">\r\n              <i class=\"fa fa-send\"></i> {{timesheets.ApprovalStatus}}\r\n            </span>\r\n            <span *ngIf=\"timesheets.ApprovalStatus == 'Not Submitted'\" class=\"badge badge-primary timego-status\" style=\"float:right; font-size:20px;margin-right: 16px;\">\r\n              <i class=\"fa fa-save\"></i> {{timesheets.ApprovalStatus}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <h5 class=\"col-md-2 timego-center\" *ngIf=\"role == 'Task Manager'\">{{ 'Employees' | translate }}</h5>\r\n          <select *ngIf=\"role == 'Task Manager'\" [(ngModel)]=\"selectModel.userId\" class=\"form-control col-md-4\">\r\n            <option [value]=\"user.Id\" *ngFor=\"let user of users\">{{user.FirstName}} {{user.LastName}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!selectModel.periodId || !selectModel.userId\" *ngIf=\"role == 'Task Manager'\" (click)=\"selectPeriod.emit(selectModel)\">{{ 'OpenTimesheet' | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!selectModel.periodId\" *ngIf=\"role == 'Employee'\" (click)=\"selectPeriod.emit(selectModel)\">{{ 'OpenTimesheet' | translate }}</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"isLoaded && timesheets != null\" class=\"form-group\">\r\n          <div *ngFor=\"let line of timesheets.Lines; let i = index\">\r\n            <div class=\"row timego-line\">\r\n              <h5 class=\"col-md-2 timego-center\">{{line.Date | date: ('DateWeekFormat' | translate)}}</h5>\r\n              <div class=\"col-md-4\">\r\n                <select [(ngModel)]=\"line.TaskId\" class=\"form-control col-md-8\">\r\n                  <option [value]=\"1\">{{ 'None' | translate }}</option>\r\n                  <option [value]=\"task.Id\" *ngFor=\"let task of tasks\">{{task.TaskName}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col-md-4 row\">\r\n                <timepicker [(ngModel)]=\"line.StartTime\" (ngModelChange)=\"checkChange(line, timesheets.Lines)\" [arrowkeys]=\"true\" [showMeridian]=\"false\" [mousewheel]=\"false\" [showSpinners]=\"false\" class=\"timego-timepicker\"></timepicker>\r\n                <i class=\"fa fa-minus fa-lg timego-rangetimepiker-icon\"></i>\r\n                <timepicker [(ngModel)]=\"line.EndTime\" (ngModelChange)=\"checkChange(line, timesheets.Lines)\" [min]=\"line.StartTime\" [mousewheel]=\"false\" [showMeridian]=\"false\" [arrowkeys]=\"false\" [showSpinners]=\"false\" class=\"timego-timepicker\"></timepicker>\r\n              </div>\r\n              <div class=\"col-md-1 timego-center\">\r\n                <b>\r\n                  <h5>{{totalLineTimeHr(line)}} {{ 'Hours' | translate }} {{totalLineTimeMin(line)}} {{ 'Minutes' | translate }}</h5>\r\n                </b>\r\n              </div>\r\n              <div class=\"col-md-1\">\r\n                <button type=\"button\" class=\"btn btn-danger\"\r\n                        *ngIf=\"!((i === (timesheets.Lines.length - 1) || timesheets.Lines[i].Date != timesheets.Lines[i+1].Date) && (i === 0 || timesheets.Lines[i].Date != timesheets.Lines[i-1].Date))\"\r\n                        (click)=\"delete.emit(line)\">\r\n                  <i class=\"fa fa-remove\"></i> {{ 'Delete' | translate }}\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger\"\r\n                        *ngIf=\"(i === (timesheets.Lines.length - 1) || timesheets.Lines[i].Date != timesheets.Lines[i+1].Date) && (i === 0 || timesheets.Lines[i].Date != timesheets.Lines[i-1].Date)\"\r\n                        (click)=\"delete.emit(line)\" disabled>\r\n                  <i class=\"fa fa-remove\"></i> {{ 'Delete' | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row validation-error\" *ngIf=\"line.ValidationError\">\r\n              <h6 class=\"col-md-10\">{{line.ValidationError}}</h6>\r\n            </div>\r\n            <div class=\"row form-group border-bottom\" *ngIf=\"i === (timesheets.Lines.length - 1) || timesheets.Lines[i].Date != timesheets.Lines[i+1].Date\">\r\n              <div class=\"col-md-1\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"addLine.emit(line)\">+</button>\r\n              </div>\r\n              <div class=\"col-md-4 timego-center\">\r\n                {{ 'AddLine' | translate }} {{line.Date | date: ('DateWeekFormat' | translate)}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 row form-group\" *ngIf=\"isLoaded\">\r\n            <h5>\r\n              {{ 'TotalTime' | translate }} {{totalTimeHr(timesheets.Lines)}} {{ 'Hours' | translate }} {{totalTimeMin(timesheets.Lines)}} {{ 'Minutes' | translate }}\r\n            </h5>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Employee'\">\r\n            <label class=\"col-md-1\">{{ 'EmployeeNotes' | translate }} </label>\r\n            <textarea rows=\"4\" style=\"width: 89%\" cols=\"50\" [(ngModel)]=\"timesheets.EmployeeNotes\"></textarea>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Task Manager'\">\r\n            <label class=\"col-md-1\" *ngIf=\"timesheets.EmployeeNotes\">{{ 'EmployeeNotes' | translate }} {{timesheets.EmployeeNotes}}</label>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Task Manager'\">\r\n            <label class=\"col-md-1\">{{ 'ApproverNotes' | translate }} </label>\r\n            <textarea rows=\"4\" style=\"width: 89%\" cols=\"50\" [(ngModel)]=\"timesheets.ApproverNotes\"></textarea>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Task Manager'\">\r\n            <div class=\"checkbox push-md-1 col-md-3\">\r\n              <div class=\"cntr\">\r\n                <label for=\"lock\" class=\"label-cbx\">\r\n                  <input id=\"lock\" type=\"checkbox\" class=\"invisible\" [(ngModel)]=\"timesheets.Lock\">\r\n                  <div class=\"checkbox\">\r\n                    <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\">\r\n                      <path d=\"M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z\"></path>\r\n                      <polyline points=\"4 11 8 15 16 6\"></polyline>\r\n                    </svg>\r\n                  </div>\r\n                  <span>{{ 'LockedForUser' | translate }}</span>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group float-right\">\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isLoaded && role == 'Task Manager'\" [disabled]=\"timesheets.ApprovalStatus == 'Approved'\" (click)=\"approve.emit(timesheets.Id)\">{{ 'Approve' | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isLoaded && role == 'Task Manager'\" [disabled]=\"timesheets.ApprovalStatus != 'Submitted'\" (click)=\"resubmite.emit(timesheets.Id)\">{{ 'RequestResubmit' | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isLoaded && role == 'Employee'\" [disabled]=\"timesheets.Lock\" (click)=\"submite.emit(timesheets.Id)\">{{ 'Submit' | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isLoaded && role == 'Employee'\" [disabled]=\"!timesheets.Lock\" (click)=\"unlock.emit(timesheets.Id)\">{{ 'RequestToUnlock' | translate }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"save.emit({Timesheets: timesheets, Period: selectModel.periodId, User: selectModel.userId})\">{{ 'Save' | translate }}</button>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Employee'\">\r\n            <label class=\"col-md-10\">{{ 'SubmitedOn' | translate }} {{timesheets.SubmittedOn | date: ('DateFormat' | translate)}}</label>\r\n          </div>\r\n          <div class=\"row form-group\" *ngIf=\"isLoaded && role == 'Employee'\">\r\n            <label class=\"col-md-10\" *ngIf=\"timesheets.ApproverNotes\">{{ 'EmployeeNotes' | translate }} {{timesheets.ApproverNotes}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/timesheets/components/timesheets/timesheets.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timesheets/components/timesheets/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_timesheets_model__ = __webpack_require__("../../../../../src/app/timesheets/models/timesheets.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_timesheets_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_timesheets_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_select_period_model__ = __webpack_require__("../../../../../src/app/timesheets/models/select-period.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_select_period_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_select_period_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AccountService__ = __webpack_require__("../../../../../src/app/services/AccountService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimesheetsComponent = (function () {
    function TimesheetsComponent(translate, account) {
        this.translate = translate;
        this.isLoaded = false;
        this.loading = false;
        this.selectPeriod = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addLine = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.submite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.resubmite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.approve = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.unlock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.mytime = new Date();
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');
        this.role = account.role;
    }
    TimesheetsComponent.prototype.ngOnInit = function () {
    };
    TimesheetsComponent.prototype.totalLineTimeHr = function (line) {
        var endTime = new Date(line.EndTime);
        var startTime = new Date(line.StartTime);
        if (startTime > endTime) {
            var date = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 24);
            var date2 = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0);
            var diffMs_1 = (+endTime.valueOf() + +date.valueOf() - +startTime.valueOf() - +date2);
            var diffHrs = Math.floor((diffMs_1 % 86400000) / 3600000); // hours
            return diffHrs;
        }
        var diffMs = (+endTime.valueOf() - +startTime.valueOf());
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        return diffHrs;
    };
    TimesheetsComponent.prototype.totalLineTimeMin = function (line) {
        var endTime = new Date(line.EndTime);
        var startTime = new Date(line.StartTime);
        if (startTime > endTime) {
            var date = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 24);
            var date2 = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0);
            var diffMs_2 = (+endTime.valueOf() + +date.valueOf() - +startTime.valueOf() - +date2);
            var diffMins = Math.round(((diffMs_2 % 86400000) % 3600000) / 60000); // minutes
            return diffMins;
        }
        var diffMs = (+endTime.valueOf() - +startTime.valueOf());
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        return diffMins;
    };
    TimesheetsComponent.prototype.totalLineTimeMs = function (line) {
        var endTime = new Date(line.EndTime);
        var startTime = new Date(line.StartTime);
        if (startTime > endTime) {
            var date = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 24);
            var date2 = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0);
            var diffMs_3 = (+endTime.valueOf() + +date.valueOf() - +startTime.valueOf() - +date2);
            return diffMs_3;
        }
        var diffMs = (+endTime.valueOf() - +startTime.valueOf());
        return diffMs;
    };
    TimesheetsComponent.prototype.Start = function (line) {
        var startTime = new Date(line.StartTime);
        return startTime;
    };
    TimesheetsComponent.prototype.End = function (line) {
        var endTime = new Date(line.EndTime);
        return endTime;
    };
    TimesheetsComponent.prototype.totalTimeHr = function (lines) {
        var time = 0;
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            time += this.totalLineTimeMs(line);
        }
        var diffHrs = Math.floor((time % 86400000) / 3600000); // hours
        return diffHrs;
    };
    TimesheetsComponent.prototype.totalTimeMin = function (lines) {
        var time = 0;
        for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
            var line = lines_2[_i];
            time += this.totalLineTimeMs(line);
        }
        var diffMins = Math.round(((time % 86400000) % 3600000) / 60000); // minutes
        return diffMins;
    };
    TimesheetsComponent.prototype.checkChange = function (currentLine, lines) {
        this.checkIntersection(currentLine, lines);
        for (var _i = 0, lines_3 = lines; _i < lines_3.length; _i++) {
            var line = lines_3[_i];
            if (line.Date == currentLine.Date && line.ValidationError != null) {
                this.checkIntersection(line, lines);
            }
        }
        //if (currentLine.StartTime > currentLine.EndTime)
        //    currentLine.ValidationError = "Time range is not valid";
        //else
        //    if (currentLine.ValidationError == "Time range is not valid")
        //        currentLine.ValidationError = null;
    };
    TimesheetsComponent.prototype.checkIntersection = function (currentLine, lines) {
        var error = false;
        for (var _i = 0, lines_4 = lines; _i < lines_4.length; _i++) {
            var line = lines_4[_i];
            if (line.Date == currentLine.Date && line != currentLine) {
                if (line.EndTime > currentLine.StartTime && line.StartTime < currentLine.EndTime) {
                    currentLine.ValidationError = "Time range has intersection";
                    error = true;
                }
                if (line.StartTime < currentLine.EndTime && line.EndTime > currentLine.StartTime) {
                    currentLine.ValidationError = "Time range has intersection";
                    error = true;
                }
            }
        }
        if (!error) {
            currentLine.ValidationError = null;
        }
    };
    TimesheetsComponent.prototype.updateDoB = function (e) {
        var res = e;
    };
    return TimesheetsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_timesheets_model__["Timesheets"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_timesheets_model__["Timesheets"]) === "function" && _a || Object)
], TimesheetsComponent.prototype, "timesheets", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], TimesheetsComponent.prototype, "isLoaded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], TimesheetsComponent.prototype, "loading", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TimesheetsComponent.prototype, "periods", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TimesheetsComponent.prototype, "tasks", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TimesheetsComponent.prototype, "users", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_select_period_model__["SelectModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_select_period_model__["SelectModel"]) === "function" && _b || Object)
], TimesheetsComponent.prototype, "selectModel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "selectPeriod", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "addLine", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "save", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "submite", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "resubmite", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "approve", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "unlock", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TimesheetsComponent.prototype, "delete", void 0);
TimesheetsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'up-timesheets',
        template: __webpack_require__("../../../../../src/app/timesheets/components/timesheets/timesheets.html"),
        styles: [__webpack_require__("../../../../../src/app/timesheets/components/timesheets/timesheets.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_AccountService__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_AccountService__["a" /* AccountService */]) === "function" && _d || Object])
], TimesheetsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=timesheets.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/containers/timesheets-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/timesheets/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/actions/timesheets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_AccountService__ = __webpack_require__("../../../../../src/app/services/AccountService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TimesheetsPageComponent = (function () {
    function TimesheetsPageComponent(store, toasterService, account) {
        this.store = store;
        this.toasterService = toasterService;
        this.timesheets$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["f" /* getTimesheet */]);
        this.isLoaded$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* getIsLoadedStatus */]);
        this.loading$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getLoadingStatus */]);
        this.periods$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["c" /* getPeriods */]);
        this.tasks$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["e" /* getTasks */]);
        this.users$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["g" /* getUsers */]);
        this.selectModel$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["d" /* getSelectModel */]);
        this.role = account.role;
    }
    TimesheetsPageComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["v" /* GetPeriodAction */](0));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["x" /* GetTasksAction */](0));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["z" /* GetUsersAction */](0));
    };
    TimesheetsPageComponent.prototype.selectPeriod = function (model) {
        if (this.role == 'Task Manager') {
            if (model.periodId && model.userId)
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["t" /* GetAction */](model));
        }
        else {
            if (model.periodId)
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["t" /* GetAction */](model));
        }
    };
    TimesheetsPageComponent.prototype.addLine = function (line) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["d" /* AddAction */](line));
    };
    TimesheetsPageComponent.prototype.save = function (model) {
        for (var _i = 0, _a = model.Timesheets.Lines; _i < _a.length; _i++) {
            var line = _a[_i];
            if (line.ValidationError != null) {
                this.toasterService.pop('error', 'Error Save', 'Timesheet line has not valid time');
                return;
            }
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["j" /* EditAction */](model));
    };
    TimesheetsPageComponent.prototype.delete = function (model) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["h" /* DeleteAction */](model));
    };
    TimesheetsPageComponent.prototype.submite = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["J" /* SubmitAction */](id));
    };
    TimesheetsPageComponent.prototype.resubmite = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["F" /* ReSubmitAction */](id));
    };
    TimesheetsPageComponent.prototype.unlock = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["L" /* ToUnlockAction */](id));
    };
    TimesheetsPageComponent.prototype.approve = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_timesheets__["e" /* ApproveAction */](id));
    };
    return TimesheetsPageComponent;
}());
TimesheetsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'timesheets-page',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        template: "\n    <up-timesheets [timesheets]=\"timesheets$ | async\" [isLoaded]=\"isLoaded$ | async\" [selectModel]=\"selectModel$ | async\" [periods]=\"periods$ | async\" \n    [users]=\"users$ | async\" [tasks]=\"tasks$ | async\" [loading]=\"loading$ | async\" \n    (selectPeriod)=\"selectPeriod($event)\" (addLine)=\"addLine($event)\" \n    (save)=\"save($event)\" (delete)=\"delete($event)\" (submite)=\"submite($event)\" (resubmite)=\"resubmite($event)\" (approve)=\"approve($event)\" (unlock)=\"unlock($event)\"></up-timesheets>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["c" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["c" /* ToasterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_AccountService__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_AccountService__["a" /* AccountService */]) === "function" && _c || Object])
], TimesheetsPageComponent);

var _a, _b, _c;
//# sourceMappingURL=timesheets-page.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/effects/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__ = __webpack_require__("../../../../rxjs/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timesheets_service__ = __webpack_require__("../../../../../src/app/timesheets/timesheets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/actions/timesheets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_toaster_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TimesheetsEffects = (function () {
    function TimesheetsEffects(actions$, timesheetsService, toasterService) {
        var _this = this;
        this.actions$ = actions$;
        this.timesheetsService = timesheetsService;
        this.toasterService = toasterService;
        this.get$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["l" /* GET */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["l" /* GET */]).skip(1);
            return _this.timesheetsService.getTimesheet(query)
                .takeUntil(nextGet$)
                .map(function (timesheet) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["u" /* GetCompleteAction */](timesheet); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["u" /* GetCompleteAction */](null)); });
        });
        this.getPeriods$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["n" /* GET_PERIODS */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["n" /* GET_PERIODS */]).skip(1);
            return _this.timesheetsService.getPeriods()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["w" /* GetPeriodCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["w" /* GetPeriodCompleteAction */](null)); });
        });
        this.getTasks$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["p" /* GET_Tasks */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["p" /* GET_Tasks */]).skip(1);
            return _this.timesheetsService.getTasks()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["y" /* GetTasksCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["y" /* GetTasksCompleteAction */](null)); });
        });
        this.getUsers$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["r" /* GET_USERS */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function () {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["s" /* GET_USERS_COMPLETE */]);
            return _this.timesheetsService.getUsers()
                .takeUntil(nextGet$)
                .map(function (result) { return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["A" /* GetUsersCompleteAction */](result); })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["A" /* GetUsersCompleteAction */](null)); });
        });
        this.approve$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["b" /* APPROVE */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["c" /* APPROVE_COMPLETE */]);
            return _this.timesheetsService.approve(query)
                .takeUntil(nextGet$)
                .map(function (result) {
                _this.toasterService.pop('success', 'Approve', 'Approve complete');
                return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["f" /* ApproveCompleteAction */](result);
            })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["f" /* ApproveCompleteAction */](null)); });
        });
        this.submite$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["H" /* SUBMIT */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["I" /* SUBMIT_COMPLETE */]);
            return _this.timesheetsService.submit(query)
                .takeUntil(nextGet$)
                .map(function (result) {
                _this.toasterService.pop('success', 'Submit', 'Submit complete');
                return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["K" /* SubmitCompleteAction */](result);
            })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["K" /* SubmitCompleteAction */](null)); });
        });
        this.resubmite$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["D" /* RESUBMIT */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["E" /* RESUBMIT_COMPLETE */]);
            return _this.timesheetsService.resubmit(query)
                .takeUntil(nextGet$)
                .map(function (result) {
                _this.toasterService.pop('success', 'Request to resubmit', 'Request to resubmit complete');
                return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["G" /* ReSubmitCompleteAction */](result);
            })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["K" /* SubmitCompleteAction */](null)); });
        });
        this.unlock = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["B" /* REQUEST_TO_UNLOCK */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["C" /* REQUEST_TO_UNLOCK_COMPLETE */]);
            return _this.timesheetsService.unlock(query)
                .takeUntil(nextGet$)
                .map(function (result) {
                _this.toasterService.pop('success', 'Request to unlock', 'Request to unlock complete');
                return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["M" /* ToUnlockCompleteAction */](result);
            })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["M" /* ToUnlockCompleteAction */](null)); });
        });
        this.edit$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["i" /* EDIT */])
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (query) {
            var nextGet$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["l" /* GET */]);
            return _this.timesheetsService.editTimesheet(query.Timesheets)
                .takeUntil(nextGet$)
                .map(function (result) {
                _this.toasterService.pop('success', 'Success Save', 'Timesheet saved');
                return new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["t" /* GetAction */]({ periodId: query.Period, userId: query.User });
            })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_11__actions_timesheets__["k" /* EditCompleteAction */](null)); });
        });
    }
    return TimesheetsEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], TimesheetsEffects.prototype, "get$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], TimesheetsEffects.prototype, "getPeriods$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], TimesheetsEffects.prototype, "getTasks$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], TimesheetsEffects.prototype, "getUsers$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _e || Object)
], TimesheetsEffects.prototype, "approve$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _f || Object)
], TimesheetsEffects.prototype, "submite$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _g || Object)
], TimesheetsEffects.prototype, "resubmite$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _h || Object)
], TimesheetsEffects.prototype, "unlock", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _j || Object)
], TimesheetsEffects.prototype, "edit$", void 0);
TimesheetsEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10__timesheets_service__["a" /* TimesheetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__timesheets_service__["a" /* TimesheetsService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_12_angular2_toaster_angular2_toaster__["c" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_angular2_toaster_angular2_toaster__["c" /* ToasterService */]) === "function" && _m || Object])
], TimesheetsEffects);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=timesheets.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/models/select-period.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=select-period.model.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/models/timesheets.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=timesheets.model.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return reducers; });
/* unused harmony export getTimesheetsState */
/* unused harmony export getTimesheetsEntityState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPeriods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTimesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timesheets__ = __webpack_require__("../../../../../src/app/timesheets/reducers/timesheets.ts");


var reducers = {
    timesheetsPage: __WEBPACK_IMPORTED_MODULE_1__timesheets__["h" /* reducer */]
};
var getTimesheetsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('timesheetsPage');
var getTimesheetsEntityState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsState, function (state) { return state.timesheetsPage; });
var getPeriods = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["c" /* getPeriods */]);
var getTimesheet = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["f" /* getTimesheet */]);
var getLoadingStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["b" /* getLoadingStatus */]);
var getIsLoadedStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["a" /* getIsLoadedStatus */]);
var getTasks = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["e" /* getTasks */]);
var getUsers = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["g" /* getUsers */]);
var getSelectModel = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getTimesheetsEntityState, __WEBPACK_IMPORTED_MODULE_1__timesheets__["d" /* getSelectModel */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/reducers/timesheets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["h"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPeriods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoadedStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTimesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSelectModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/actions/timesheets.ts");

var initialState = {
    timesheet: null,
    isLoaded: false,
    loading: false,
    periods: [],
    selectModel: { periodId: null, userId: null },
    tasks: [],
    users: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["l" /* GET */]:
            {
                var selectModel = action.payload;
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: true,
                    periods: state.periods,
                    selectModel: selectModel,
                    tasks: state.tasks,
                    users: state.users
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["m" /* GET_COMPLETE */]: {
            var timesheet = action.payload;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                selectModel: state.selectModel,
                tasks: state.tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["n" /* GET_PERIODS */]:
            {
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: false,
                    periods: state.periods,
                    selectModel: state.selectModel,
                    tasks: state.tasks,
                    users: state.users
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["o" /* GET_PERIODS_COMPLETE */]: {
            var periods = action.payload;
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: periods,
                selectModel: state.selectModel,
                tasks: state.tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["p" /* GET_Tasks */]:
            {
                return {
                    timesheet: state.timesheet,
                    isLoaded: true,
                    loading: false,
                    periods: state.periods,
                    selectModel: state.selectModel,
                    tasks: state.tasks,
                    users: state.users
                };
            }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["q" /* GET_Tasks_COMPLETE */]: {
            var tasks = action.payload;
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                selectModel: state.selectModel,
                tasks: tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["s" /* GET_USERS_COMPLETE */]: {
            var users = action.payload;
            return {
                timesheet: state.timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                selectModel: state.selectModel,
                tasks: state.tasks,
                users: users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["a" /* ADD */]: {
            var line = action.payload;
            var lines = state.timesheet.Lines;
            var startDate = new Date(line.EndTime);
            var endDate = new Date(line.EndTime);
            endDate.setHours(endDate.getHours() + 1);
            var newLine = {
                Date: line.Date,
                EndTime: endDate,
                Id: 0,
                StartTime: startDate,
                Task: "",
                TaskId: 1,
                ValidationError: null
            };
            lines.push(newLine);
            lines = lines.sort(function (obj1, obj2) {
                if (obj1.StartTime > obj2.StartTime) {
                    return 1;
                }
                if (obj1.StartTime < obj2.StartTime) {
                    return -1;
                }
                return 0;
            });
            var timesheet = state.timesheet;
            timesheet.Lines = lines;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                selectModel: state.selectModel,
                tasks: state.tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["g" /* DELETE */]: {
            var line = action.payload;
            var lines = state.timesheet.Lines;
            var index = lines.indexOf(line, 0);
            if (index > -1) {
                lines.splice(index, 1);
            }
            var timesheet = state.timesheet;
            timesheet.Lines = lines;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                selectModel: state.selectModel,
                tasks: state.tasks,
                users: state.users
            };
        }
        //
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["b" /* APPROVE */]: {
            var timesheet = state.timesheet;
            timesheet.ApprovalStatus = "Approved";
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                selectModel: state.selectModel,
                tasks: state.tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["H" /* SUBMIT */]: {
            var timesheet = state.timesheet;
            timesheet.ApprovalStatus = "Waiting for Approval";
            timesheet.LockStatus = "Locked";
            timesheet.Lock = true;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                selectModel: state.selectModel,
                tasks: state.tasks,
                users: state.users
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_timesheets__["D" /* RESUBMIT */]: {
            var timesheet = state.timesheet;
            timesheet.ApprovalStatus = "Requesting Resubmit";
            timesheet.LockStatus = "Unlocked";
            timesheet.Lock = false;
            return {
                timesheet: timesheet,
                isLoaded: true,
                loading: false,
                periods: state.periods,
                selectModel: state.selectModel,
                tasks: state.tasks,
                users: state.users
            };
        }
        default: {
            return state;
        }
    }
}
var getPeriods = function (state) { return state.periods; };
var getLoadingStatus = function (state) { return state.loading; };
var getIsLoadedStatus = function (state) { return state.isLoaded; };
var getTimesheet = function (state) { return state.timesheet; };
var getTasks = function (state) { return state.tasks; };
var getUsers = function (state) { return state.users; };
var getSelectModel = function (state) { return state.selectModel; };
//# sourceMappingURL=timesheets.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/timesheets-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_timesheets_page__ = __webpack_require__("../../../../../src/app/timesheets/containers/timesheets-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AlwaysAuthGuard__ = __webpack_require__("../../../../../src/app/AlwaysAuthGuard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers_timesheets_page__["a" /* TimesheetsPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__AlwaysAuthGuard__["a" /* AlwaysAuthGuard */]],
        data: {
            title: 'timesheets'
        }
    }
];
var TimesheetsRoutingModule = (function () {
    function TimesheetsRoutingModule() {
    }
    return TimesheetsRoutingModule;
}());
TimesheetsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], TimesheetsRoutingModule);

//# sourceMappingURL=timesheets-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/timesheets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetsModule", function() { return TimesheetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timesheets_routing_module__ = __webpack_require__("../../../../../src/app/timesheets/timesheets-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timesheets_service__ = __webpack_require__("../../../../../src/app/timesheets/timesheets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_timesheets_page__ = __webpack_require__("../../../../../src/app/timesheets/containers/timesheets-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effects_timesheets__ = __webpack_require__("../../../../../src/app/timesheets/effects/timesheets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index__ = __webpack_require__("../../../../../src/app/timesheets/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__("../../../../../src/app/timesheets/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TimesheetsModule = (function () {
    function TimesheetsModule() {
    }
    return TimesheetsModule;
}());
TimesheetsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__timesheets_routing_module__["a" /* TimesheetsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_index__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forFeature('timesheetsPage', __WEBPACK_IMPORTED_MODULE_12__reducers__["h" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_9__effects_timesheets__["a" /* TimesheetsEffects */]])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__containers_timesheets_page__["a" /* TimesheetsPageComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__timesheets_service__["a" /* TimesheetsService */]]
    })
], TimesheetsModule);

//# sourceMappingURL=timesheets.module.js.map

/***/ }),

/***/ "../../../../../src/app/timesheets/timesheets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_RequestService__ = __webpack_require__("../../../../../src/app/services/RequestService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimesheetsService = (function () {
    function TimesheetsService(requestService) {
        this.requestService = requestService;
    }
    TimesheetsService.prototype.getTimesheet = function (model) {
        return this.requestService.post("/api/GetTimesheets/", model);
    };
    TimesheetsService.prototype.getPeriods = function () {
        return this.requestService.get("/api/periods/");
    };
    TimesheetsService.prototype.getTasks = function () {
        return this.requestService.get("/api/tasks/");
    };
    TimesheetsService.prototype.editTimesheet = function (timesheets) {
        return this.requestService.post("/api/Timesheets/", timesheets);
    };
    TimesheetsService.prototype.getUsers = function () {
        return this.requestService.get("/api/GetUsers/");
    };
    TimesheetsService.prototype.approve = function (id) {
        return this.requestService.get("/api/ApproveTimesheets?id=" + id);
    };
    TimesheetsService.prototype.submit = function (id) {
        return this.requestService.get("/api/SubmitTimesheets?id=" + id);
    };
    TimesheetsService.prototype.resubmit = function (id) {
        return this.requestService.get("/api/ReSubmitTimesheets?id=" + id);
    };
    TimesheetsService.prototype.unlock = function (id) {
        return this.requestService.get("/api/UnlockTimesheets?id=" + id);
    };
    return TimesheetsService;
}());
TimesheetsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_RequestService__["a" /* RequestService */]) === "function" && _a || Object])
], TimesheetsService);

var _a;
//# sourceMappingURL=timesheets.service.js.map

/***/ })

});
//# sourceMappingURL=timesheets.module.chunk.js.map