import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule, CommonModule, ReactiveFormsModule, FormsModule],
  exports: [MaterialModule, CommonModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
