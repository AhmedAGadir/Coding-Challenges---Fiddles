// Create a Warrior class
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods

 const RANKS = ['Pushover','Novice','Fighter','Warrior','Veteran','Sage','Elite','Conqueror','Champion','Master','Greatest']

class Warrior {
  
  constructor(level = 1, rank = 'Pushover', experience = 100, achievements = []) {
    this._level = level;
    this._rank = rank;
    this._experience = experience;
    this._achievements = achievements;
  }
  
  level() {
    return this._level;
  }
  
  rank() {
    return this._rank
  } 
  
  experience() {
     return this._experience 
  }
  
  achievements() {
    return this._achievements;
  }
  
  training([event, x, y]) {
    if (this._level >= y) {
      this._achievements.push(event)
      this.addExperience(x)
      return event;
    } else return 'Not strong enough'
  }
  
  addExperience(exp) {
    this._experience += exp;
    if (this._experience > 10000)
      this._experience = 10000;
    this.updateLevel();
  }
  
  updateLevel() {
    this._level = Math.floor(this._experience/100)
    this.updateRank(this);
  }
  
  updateRank(obj) {
      obj._rank = RANKS[Math.floor(obj._level/10)];
  }
 
  battle(level) {
    let opponent = {_level: level};
    this.updateRank(opponent);
    if (level < 1 || level > 100) {
      return 'Invalid level';
    } else if (this._level === opponent._level) {
      this.addExperience(10);
      return 'A good fight';
    } else if (this._level === opponent._level + 1) {
      this.addExperience(5);
      return 'A good fight';
    } else if (this._level >= opponent._level + 2) {
      return 'Easy fight';
    } else if (opponent._level >= this._level + 5 && opponent._rank !== this._rank) {
      return 'You\'ve been defeated';
    } else if (opponent._level >= this._level + 1) {
      this.addExperience(20 * (opponent._level - this._level) * (opponent._level - this._level));
      return 'An intense fight';
    }
    
  }
}