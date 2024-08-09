import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent {
  minutes: number = 25; // Valor padrão de 25 minutos
  remainingTime: number = 0;
  secondsRemaining: number = 0;
  timerInterval: any;

  startTimer() {
    this.remainingTime = this.minutes * 60; // Convertendo minutos para segundos
    this.timerInterval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.updateTimerDisplay();
      } else {
        this.playSound();
        clearInterval(this.timerInterval);
      }
    }, 1000); // 1000ms = 1 segundo
  }

  updateTimerDisplay() {
    this.secondsRemaining = this.remainingTime % 60;
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.remainingTime = 0;
    this.secondsRemaining = 0;
  }

  playSound() {
    const audio = new Audio('assets/complete.mp3'); // Substitua com o caminho do som que deseja tocar
    audio.play();
  }

  get displayMinutes(): number {
    return Math.floor(this.remainingTime / 60);
  }

}
