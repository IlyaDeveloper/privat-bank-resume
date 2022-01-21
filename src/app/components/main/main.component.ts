import {Component, OnInit} from '@angular/core';

const DEFAULT_TEXT = 'Пащук Илья Викторович';

const VOWELS = {
  en: 'aeiou',
  ru: 'аеёиоуыэюя'
}
const CONSONANTS = {
  en: 'bcdfghjklmnpqrstvwxyz',
  ru: 'бвгджзйклмнпрстфхцчшщьъ'
}

@Component({
  selector: 'prb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  values: string = '';

  vowels: number = 0;
  consonants: number = 0;

  defaults: string = DEFAULT_TEXT;

  constructor() {
  }

  ngOnInit(): void {
  }

  searchVowelsCon(str, method) {
    let
      vowels = Object.values(VOWELS).join(''),
      consonants = Object.values(CONSONANTS).join(''),
      vCount = 0,
      cCount = 0,
      wordsRefact = str.replace(/[0-9\s]/g, '').toLowerCase();

    // Метод for
    let mFor = () => {
      for (var i = 0; i <= wordsRefact.length; i++)
        if (vowels.search(wordsRefact[i]) == -1)
          cCount++
        else if (consonants.search(wordsRefact[i]) == -1)
          vCount++
    };

    // Метод forEach
    let mForEach = () => {
      [...wordsRefact].forEach(
        (item, i) => [...vowels].forEach((elm) =>
          (item === elm) ? vCount++ : (cCount = (i + 1) - vCount)));
    }

    (method) ? mFor() : mForEach();

    return {
      vCount,
      cCount
    };
  }

  onCalc() {
    this.vowels = this.searchVowelsCon(this.values, 1).vCount;
    this.consonants = this.searchVowelsCon(this.values, 1).cCount;
  }

}
