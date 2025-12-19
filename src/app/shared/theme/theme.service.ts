import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storageKey = 'app-theme';

  get currentTheme(): Theme {
    return document.documentElement.getAttribute('data-theme') as Theme || 'light';
  }

  initTheme() {
    const savedTheme = localStorage.getItem(this.storageKey) as Theme;
    this.setTheme(savedTheme || 'light');
  }

  toggleTheme() {
    this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
  }
}
