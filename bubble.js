/*
	+ STUDING BUBBLE SORT ALG 
*/
// BUBBLE INFO 
class Bubble extends SrtRt{
	
	constructor(name, num, info){
		super(name, num, info);
	}
	
	// PROPs F ALGs:override 
	props(){
		return{
			stable:true,
			inPlace:true,
			bestCase:'O(n)',
			averageCase:'O(n^2)',
			worstCase:'O(n^2)',
			spaceComplexity:'O(1)'
		};//END STR PROPs 
	}// END STR PROPs 
	
	// ALG TECHNIQUE MTH
	technique(){
		return "Bubble Tech";
	}//END TECH 
	
	// CONCEPTs F ALG 
	concepts(){
		return "1.Left Smaller Than Right Always, 2.Compare Two Adjacent Numbers, 3.Number F New Lists > Bubble ALG Gets = n";
	}//END STR CNCEPTs
	
	// DISADVANTAGES F ALG 
	disadvantages(){
		return 'Bubble ALG Compare All Numbers Even IF It Gets Solution. Example Try This Array = [6,5,3,1,8,7,2,4]';
	}//END
	
	// START GAME MY FIRST ALGORITHM N1
	/*
	
	
	*/
	// STR ALG DEFAULTLY > LST =[6,5,3,1,8,7,2,4]; length > n = 8 
	tryMineAlg(lst,n){
		// STORE F ARRAAYs F EACH NUMBER  
		let str   =[];
		let index =0;
		// GET VALUE F i 
		let w     =0;
		//SRT LST 
		for(let i=0; i<n; i++){
			
			// COMPARISON PROCESS + GENERATE NEW LST > COUNT = n-1  
			for(let y=0; y<n-1; y++){
				
				if(lst[y] > lst[y+1]){
					
					//tools.swap(lst[y],lst[y+1]);
					let temp =lst[y];
					lst[y]   =lst[y+1];
					lst[y+1] =temp;
				}//END NEW LST 
				
				
			}//END y 	
			/**/
			str[index] =lst;
			console.log(str[index]);
			index++;
			w =i;
			
		}//END i 
		
		// GET SORTED LST 
		return {
			sortedList:lst,
			store:str,
			index:index,
			w:w,
		};
	}//END ALG 
	// END GAME 
	tryNotesBookAlg(){
		
		
		
	}//END ALG 
	
	
	
	

	
	
};
console.log("bubble's ready..");
// END bubbleSrt{} CLS 



