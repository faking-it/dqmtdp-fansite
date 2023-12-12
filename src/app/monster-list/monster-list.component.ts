import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Monster, MonsterFamily, MonsterRank } from '../core/model/monster';

@Component({
  selector: 'app-monster-list',
  standalone: true,
  imports: [ MatTableModule ],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
  public monsters: Monster[] = [];
  public displayedColumns: string[] = ['id', 'name', 'family', 'rank'];

  constructor() {
    const monster = new Monster(0, 'Monstre1', MonsterFamily.slim, MonsterRank.g);
    this.monsters.push(monster);
  }
}
