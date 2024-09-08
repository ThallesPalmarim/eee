import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() person!: { photo: string, name: string, nickname: string, description: string };
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.classList.remove('no-scroll');
  }
}
