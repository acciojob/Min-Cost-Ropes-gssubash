function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum=0,ans=0;
 for(let i=0;i<arr.length;i++){
	 sum += arr[i];
		 ans += sum;
 }
	return ans;
}

module.exports=mincost;
