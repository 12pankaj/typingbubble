		ar=[113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104, 106, 107, 108, 122, 120, 99, 118, 98, 110, 109]
		startTimer(10);
		var key=document.getElementById('keybord');
		for(i=0;i<ar.length;i++)
		{
		var br=document.createElement('br')

			if(i==10 || i==19 )
			{
				key.append(br)	
			}
		var but=document.createElement('button')
			but.style="margin:2px;padding:5px;font-size:20px";
			but.setAttribute("onclick","value1('"+String.fromCharCode(ar[i])+"')")
			but.innerText=String.fromCharCode(ar[i]);
			key.append(but)
		}
		var bch="a";
		
		var scr=document.getElementById('score');
		var hscr=document.getElementById('high');
		var bu=document.getElementById('buble');
		var rang;		var sc=0;		var hi=0;		var d=0;		rand();
		function rand() {
		char = String.fromCharCode(Math.trunc(Math.random() * (122 - 97 + 1)) + 97);
		rang = Math.trunc(Math.random() * (85 - 1 + 1)) + 1;
		bu.innerText=char;		bu.style="margin-left:"+rang+"%";
		}
		window.addEventListener("keydown", (event) => {
			if(d==1)
			{	bu.classList.remove("ani");
				return 0;}
       	if(event.key==char)
		{
				bu=document.getElementById('buble');
				bu.innerText="";
				sc++;
				scr.innerText=sc;

			setTimeout(() => {
				
				bu.classList.remove("ani");
				setTimeout(() => {
					bu.classList.add("ani");
					rand()
				}, 100);
			}, 100);
		}	
	});
		

		function value1(a) {
			// body...

			if(d==1)
			{	bu.classList.remove("ani");
				return 0;}
       	if(a==char )
		{
				bu=document.getElementById('buble');
				bu.innerText="";
				sc++;
				scr.innerText=sc;
			setTimeout(() => {
				bu.classList.remove("ani");
				setTimeout(() => {
					bu.classList.add("ani");
					rand()
				}, 100);
			}, 100);
		}
		}



	function startTimer(seconds)
	{
	  const timer = document.getElementById('timer');
		let tim=  setInterval(() => 
		{
	    
			if (seconds == -1) 
			{ d=1;
			  clearInterval(tim);
				if(hi<sc)		hi=sc;
				hscr.innerText=hi;
				seconds=1;
				var ch=confirm("do you retry \n your score is ="+sc)
				if(ch==true)
				{	clearInterval(tim);
					d=0;
					sc=0
					scr.innerText=sc;
					bu.classList.add("ani");
					rand();	
					startTimer(10);				
				}
				else
				{	d=1;
					bu.classList.remove("ani");
				}
			}
			else
			{	    timer.innerText = `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
			}	
	    seconds--;
	  }, 1000);
	}
