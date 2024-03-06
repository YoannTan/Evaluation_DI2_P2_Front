import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [CommonModule, RouterOutlet]
})
export class LayoutComponent implements OnInit{

  isAdmin: boolean = false;

  constructor() {
  }
  ngOnInit(): void {
    console.log('layout works !')
  }

}