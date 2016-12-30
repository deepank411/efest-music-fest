$(document).ready(function(){
	var $shareButtons=$(".share-button")
		,$toggleButton=$(".share-toggle-button")

		,menuOpen=false
		,buttonsNum=$shareButtons.length
		,buttonsMid=(buttonsNum/2)
		,spacing=75
	;

	function openShareMenu(){
		TweenMax.to($toggleButton,0.1,{
			scaleY:1.2,
			scaleX:0.6,
			ease:Quad.easeOut,
			onComplete:function(){
				TweenMax.to($toggleButton,.8,{
					scale:0.6,
					ease:Elastic.easeOut,
					easeParams:[1.1,0.6]
				})
				TweenMax.to($toggleButton.children(".share-icon"),.8,{
					scale:1.4,
					ease:Elastic.easeOut,
					easeParams:[1.1,0.6]
				})
			}
		})
		$shareButtons.each(function(i){
			var $cur=$(this);
			var pos=i-buttonsMid;
			if(pos>=0) pos+=1;
			var dist=Math.abs(pos);
			$cur.css({
				zIndex:buttonsMid-dist
			});
			TweenMax.to($cur,1.1*(dist),{
				y:pos*spacing,
				scaleX:0.6,
				scaleY:1.1,
				ease:Elastic.easeOut,
				easeParams:[1.01,0.5]
			});
			TweenMax.to($cur,.8,{
				delay:(0.2*(dist))-0.1,
				scale:0.6,
				ease:Elastic.easeOut,
				easeParams:[1.1,0.6]
			})

			TweenMax.fromTo($cur.children(".share-icon"),0.2,{
				scale:0
			},{
				delay:(0.2*dist)-0.1,
				scale:1,
				ease:Quad.easeInOut
			})
		})
	}
	function closeShareMenu(){
		TweenMax.to([$toggleButton,$toggleButton.children(".share-icon")],1.4,{
			delay:0.1,
			scale:1,
			ease:Elastic.easeOut,
			easeParams:[1.1,0.3]
		});
		$shareButtons.each(function(i){
			var $cur=$(this);
			var pos=i-buttonsMid;
			if(pos>=0) pos+=1;
			var dist=Math.abs(pos);
			$cur.css({
				zIndex:dist
			});

			TweenMax.to($cur,0.4+((buttonsMid-dist)*0.1),{
				y:0,
				scale:.95,
				ease:Quad.easeInOut,
			});

			TweenMax.to($cur.children(".share-icon"),0.2,{
				scale:0,
				ease:Quad.easeIn
			});
		})
	}

	function toggleShareMenu(){
		menuOpen=!menuOpen

		menuOpen?openShareMenu():closeShareMenu();
	}
	$toggleButton.on("mousedown",function(){
		toggleShareMenu();
	})

})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaGFyZXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0dmFyICRzaGFyZUJ1dHRvbnM9JChcIi5zaGFyZS1idXR0b25cIilcblx0XHQsJHRvZ2dsZUJ1dHRvbj0kKFwiLnNoYXJlLXRvZ2dsZS1idXR0b25cIilcblxuXHRcdCxtZW51T3Blbj1mYWxzZVxuXHRcdCxidXR0b25zTnVtPSRzaGFyZUJ1dHRvbnMubGVuZ3RoXG5cdFx0LGJ1dHRvbnNNaWQ9KGJ1dHRvbnNOdW0vMilcblx0XHQsc3BhY2luZz03NVxuXHQ7XG5cblx0ZnVuY3Rpb24gb3BlblNoYXJlTWVudSgpe1xuXHRcdFR3ZWVuTWF4LnRvKCR0b2dnbGVCdXR0b24sMC4xLHtcblx0XHRcdHNjYWxlWToxLjIsXG5cdFx0XHRzY2FsZVg6MC42LFxuXHRcdFx0ZWFzZTpRdWFkLmVhc2VPdXQsXG5cdFx0XHRvbkNvbXBsZXRlOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdFR3ZWVuTWF4LnRvKCR0b2dnbGVCdXR0b24sLjgse1xuXHRcdFx0XHRcdHNjYWxlOjAuNixcblx0XHRcdFx0XHRlYXNlOkVsYXN0aWMuZWFzZU91dCxcblx0XHRcdFx0XHRlYXNlUGFyYW1zOlsxLjEsMC42XVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRUd2Vlbk1heC50bygkdG9nZ2xlQnV0dG9uLmNoaWxkcmVuKFwiLnNoYXJlLWljb25cIiksLjgse1xuXHRcdFx0XHRcdHNjYWxlOjEuNCxcblx0XHRcdFx0XHRlYXNlOkVsYXN0aWMuZWFzZU91dCxcblx0XHRcdFx0XHRlYXNlUGFyYW1zOlsxLjEsMC42XVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0JHNoYXJlQnV0dG9ucy5lYWNoKGZ1bmN0aW9uKGkpe1xuXHRcdFx0dmFyICRjdXI9JCh0aGlzKTtcblx0XHRcdHZhciBwb3M9aS1idXR0b25zTWlkO1xuXHRcdFx0aWYocG9zPj0wKSBwb3MrPTE7XG5cdFx0XHR2YXIgZGlzdD1NYXRoLmFicyhwb3MpO1xuXHRcdFx0JGN1ci5jc3Moe1xuXHRcdFx0XHR6SW5kZXg6YnV0dG9uc01pZC1kaXN0XG5cdFx0XHR9KTtcblx0XHRcdFR3ZWVuTWF4LnRvKCRjdXIsMS4xKihkaXN0KSx7XG5cdFx0XHRcdHk6cG9zKnNwYWNpbmcsXG5cdFx0XHRcdHNjYWxlWDowLjYsXG5cdFx0XHRcdHNjYWxlWToxLjEsXG5cdFx0XHRcdGVhc2U6RWxhc3RpYy5lYXNlT3V0LFxuXHRcdFx0XHRlYXNlUGFyYW1zOlsxLjAxLDAuNV1cblx0XHRcdH0pO1xuXHRcdFx0VHdlZW5NYXgudG8oJGN1ciwuOCx7XG5cdFx0XHRcdGRlbGF5OigwLjIqKGRpc3QpKS0wLjEsXG5cdFx0XHRcdHNjYWxlOjAuNixcblx0XHRcdFx0ZWFzZTpFbGFzdGljLmVhc2VPdXQsXG5cdFx0XHRcdGVhc2VQYXJhbXM6WzEuMSwwLjZdXG5cdFx0XHR9KVxuXG5cdFx0XHRUd2Vlbk1heC5mcm9tVG8oJGN1ci5jaGlsZHJlbihcIi5zaGFyZS1pY29uXCIpLDAuMix7XG5cdFx0XHRcdHNjYWxlOjBcblx0XHRcdH0se1xuXHRcdFx0XHRkZWxheTooMC4yKmRpc3QpLTAuMSxcblx0XHRcdFx0c2NhbGU6MSxcblx0XHRcdFx0ZWFzZTpRdWFkLmVhc2VJbk91dFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdGZ1bmN0aW9uIGNsb3NlU2hhcmVNZW51KCl7XG5cdFx0VHdlZW5NYXgudG8oWyR0b2dnbGVCdXR0b24sJHRvZ2dsZUJ1dHRvbi5jaGlsZHJlbihcIi5zaGFyZS1pY29uXCIpXSwxLjQse1xuXHRcdFx0ZGVsYXk6MC4xLFxuXHRcdFx0c2NhbGU6MSxcblx0XHRcdGVhc2U6RWxhc3RpYy5lYXNlT3V0LFxuXHRcdFx0ZWFzZVBhcmFtczpbMS4xLDAuM11cblx0XHR9KTtcblx0XHQkc2hhcmVCdXR0b25zLmVhY2goZnVuY3Rpb24oaSl7XG5cdFx0XHR2YXIgJGN1cj0kKHRoaXMpO1xuXHRcdFx0dmFyIHBvcz1pLWJ1dHRvbnNNaWQ7XG5cdFx0XHRpZihwb3M+PTApIHBvcys9MTtcblx0XHRcdHZhciBkaXN0PU1hdGguYWJzKHBvcyk7XG5cdFx0XHQkY3VyLmNzcyh7XG5cdFx0XHRcdHpJbmRleDpkaXN0XG5cdFx0XHR9KTtcblxuXHRcdFx0VHdlZW5NYXgudG8oJGN1ciwwLjQrKChidXR0b25zTWlkLWRpc3QpKjAuMSkse1xuXHRcdFx0XHR5OjAsXG5cdFx0XHRcdHNjYWxlOi45NSxcblx0XHRcdFx0ZWFzZTpRdWFkLmVhc2VJbk91dCxcblx0XHRcdH0pO1xuXG5cdFx0XHRUd2Vlbk1heC50bygkY3VyLmNoaWxkcmVuKFwiLnNoYXJlLWljb25cIiksMC4yLHtcblx0XHRcdFx0c2NhbGU6MCxcblx0XHRcdFx0ZWFzZTpRdWFkLmVhc2VJblxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXG5cdGZ1bmN0aW9uIHRvZ2dsZVNoYXJlTWVudSgpe1xuXHRcdG1lbnVPcGVuPSFtZW51T3BlblxuXG5cdFx0bWVudU9wZW4/b3BlblNoYXJlTWVudSgpOmNsb3NlU2hhcmVNZW51KCk7XG5cdH1cblx0JHRvZ2dsZUJ1dHRvbi5vbihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKCl7XG5cdFx0dG9nZ2xlU2hhcmVNZW51KCk7XG5cdH0pXG5cbn0pXG4iXSwiZmlsZSI6InNoYXJldi5qcyJ9
