function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a, b) => a - b);
  let sum = 0,
    ans = 0;
  if (arr.length < 2) return arr[0];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i > 0) { 

      ans += sum;
    }
    
  }
  return ans;
}

module.exports=mincost;
