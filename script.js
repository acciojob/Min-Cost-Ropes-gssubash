function mincost(arr)
{ 
//write your code here
// return the min cost
  let sum = 0,i=0
    ans = 0;
	let arrLen = arr.length;
  if (arrLen < 2) return arr[0];
while(i<arrLen-1){
	arr.sort((a, b) => a - b);
	
	// : 
	sum = arr[0]+arr[1];
	// console.log(sum);
  ans += sum;
	arr.splice(0,2,sum);
	i++; 
	} 
  return ans;
}
// alert(mincost([1, 2, 3, 4, 5]));

module.exports=mincost;
