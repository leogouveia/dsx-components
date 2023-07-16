import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DscFormFieldErrorComponent } from './dsc-form-field-error.component';
export class DscFormFieldErrorModule {
}
DscFormFieldErrorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DscFormFieldErrorComponent],
                exports: [DscFormFieldErrorComponent],
                imports: [CommonModule, ReactiveFormsModule, MatIconModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNjLWZvcm0tZmllbGQtZXJyb3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZHNjLWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRlcy9kc2MtZm9ybS1maWVsZC1lcnJvci9kc2MtZm9ybS1maWVsZC1lcnJvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBTzlFLE1BQU0sT0FBTyx1QkFBdUI7OztZQUxuQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxDQUFDO2FBQzVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBEc2NGb3JtRmllbGRFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZHNjLWZvcm0tZmllbGQtZXJyb3IuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRHNjRm9ybUZpZWxkRXJyb3JDb21wb25lbnRdLFxuICBleHBvcnRzOiBbRHNjRm9ybUZpZWxkRXJyb3JDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBNYXRJY29uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBEc2NGb3JtRmllbGRFcnJvck1vZHVsZSB7fVxuIl19