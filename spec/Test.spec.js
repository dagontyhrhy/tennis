function Tennis(){
	scoreA = 0;
	scoreB = 0;
	let scorebaseA ;
	let scorebaseB ;

	this.start = function(){
		return this.echo();
	}

	this.echo = function(){
		return scorebaseA +' - '+ scorebaseB;
	}

	this.getscoreA = function(){
		scoreA += 1;
		if (scoreA===1){
			return scorebaseA = 'Love';
		}
		else if(scoreA===2){
			return scorebaseA = 'Fifteen';
		}
		else if(scoreA===3){
			return scorebaseA = 'Thirty';
		}
		else if(scoreA===4){
			return scorebaseA = 'Forty';
		}
		else if(scoreA===5){
			return 'Player A won';
		}
		return this.echo();
	}

	this.getscoreB = function(){
		scoreB += 1;
		if(scoreB===1){
			return scorebaseB = 'Love';
		}
		else if(scoreB===2){
			return scorebaseB = 'Fifteen';
		}
		else if(scoreB===3){
			return scorebaseB = 'Thirty';
		}
		else if(scoreB===4){
			return scorebaseB = 'Forty';
		}
		else if(scoreB===5){
			return 'Player B won';
		}
		return this.echo();
	}
}
var Player = new Tennis();
describe('Tennis()', function() {

  it('should be "Love-Love" when Start game', function() {
    expect(Player.start()).toBe('Love-Love');
  });

  it('should be "Fifteen-Love" when A get score 1-0',function(){
    expect(Player.getscoreA()).toBe('Fifteen-Love');
  });
   it('should be "Thirty-Love" when A get score 2-0',function(){
    expect(Player.getscoreA()).toBe('Thirty-Love');
  });
    it('should be "Forty-Love" when A get score 3-0',function(){
    expect(Player.getscoreA()).toBe('Forty-Love');
  });
    it('should be "Love-Fifteen" when B get score 0-1',function(){
    expect(Player.getscoreB()).toBe('Love-Fifteen');
  });
    it('should be "Love-Thirty" when B get score 0-2',function(){
    expect(Player.getscoreB()).toBe('Love-Thirty');
  });
    it('should be "Love-Forty" when B get score 0-3',function(){
    expect(Player.getscoreB()).toBe('Love-Forty');
  });
});
