function Tennis(){
	scoreA = 0;
	scoreB = 0;
	let scorebaseA ;
	let scorebaseB ;

	this.echo = function(scorebaseA,scorebaseB){
		if(scorebaseA!=5&&scorebaseB!=5){
			return scorebaseA +' - '+ scorebaseB;
		}
		else if(scorebaseA===5){
			return 'Player A won';
			scorebaseA = 0;
		}
		else if(scorebaseB===5){
			return 'Player B won';
			scorebaseB = 0;
		}
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
		return this.echo(scorebaseA);
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
		return this.echo(scorebaseB);
	}
}
describe('Tennis()', function() {
var Player = new Tennis();
  it('should be "Love-Love" when Start game', function() {
    expect(Player.echo()).toEqual('Love-Love');
  });

  it('should be "Fifteen-Love" when A get score 1-0',function(){
    expect(Player.getscoreA()).toEqual('Fifteen-Love');
  });
   it('should be "Thirty-Love" when A get score 2-0',function(){
    expect(Player.getscoreA()).toEqual('Thirty-Love');
  });
    it('should be "Forty-Love" when A get score 3-0',function(){
    expect(Player.getscoreA()).toEqual('Forty-Love');
  });
    it('should  be  "A won the game" when A win',function(){
   expect(Player.getscoreA()).toEqual('A won the game');
  });
    it('should be "Love-Fifteen" when B get score 0-1',function(){
    expect(Player.getscoreB()).toEqual('Love-Fifteen');
  });
    it('should be "Love-Thirty" when B get score 0-2',function(){
    expect(Player.getscoreB()).toEqual('Love-Thirty');
  });
    it('should be "Love-Forty" when B get score 0-3',function(){
    expect(Player.getscoreB()).toEqual('Love-Forty');
  });
    it('should  be  "A won the game" when B win',function(){
   expect(Player.getscoreB()).toEqual('B won the game');
  });
  it('should be "Fifteen-Fifteen" when A or B get score 1-1',function(){
	Player.getscoreA();
	Player.getscoreB()
    expect(Player.echo()).toEqual('Fifteen-Fifteen');
  });
  it('should be "Thirty-Fifteen" when A get score 2-1',function(){
	Player.getscoreA()
    expect(Player.echo()).toEqual('Thirty-Fifteen');
  });
});
