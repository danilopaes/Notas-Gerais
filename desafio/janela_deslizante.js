/**
 * @param {number[]} nums
 * @retunr {number}
 */

var longestSubarray = function(nums){
  let begin = 0
  let end = 0
  let maxLength = 0
  let alreadyDeletd = 0
  let isWindowActive = false
  let lastZero = 0


  for (let i = 0; i < nums.length; i++){
    if(nums[i] == 1){
      if(isWindowActive){
        end = i
      }else{
        end = i
        begin = i
        isWindowActive = true
      }
    }else{
      if(isWindowActive == 0){
        if(alreadyDeletd){
          end = i
          alreadyDeletd = 1
          lastZero = 1
        }else{
          let currentMaxLength = end - begin
          begin = lastZero + 1
          maxLength = currentMaxLength > maxLength ? currentMaxLength : maxLength
          isWindowActive = false
          alreadyDeletd = 0
        }
      }
    }
  }

  if(isWindowActive){
    let currentMaxLength = end - begin - alreadyDeletd + 1
    maxLength = currentMaxLength > maxLength ? currentMaxLength : maxLength
  }

  if(maxLength == nums.length){
    return maxLength - 1
  }

  return maxLength
}

