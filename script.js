function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum=0,ans=0;
	arr.sort((a,b)=>a-b);
 for(let i=0;i<arr.length;i++){
	 sum += arr[i];
		 ans += sum;
 }
	return ans;
}

module.exports=mincost;
