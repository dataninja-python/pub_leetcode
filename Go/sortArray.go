package main

import (
	"fmt"
)

// Given an array consisting of two arrays split at an index produce an array sorted by the original indexes in the form [x(1),y(1),x(2),y(2)...x(n),y(n)]

// constraints:
// * starting array has an even number of integer elements
// * nums = parameter for original array passed to function
// * n = parameter for ending index for x sub array or x[-1] or y(1) = nums[n + 1]
// * index starts counting at 1 not 0 for this array
// * 1 <= n <= 500
// * nums.length == 2n
// * 1 <= nums[i] <= 10^3

// Example #1:
// input: array1 = [1,5,7,4,6,8], n = 3
// output: [1,4,5,6,7,8,15]
// reason: x(1) = 1, x(2) = 5...y(1) = 4, y(2) = 6; thus, [1,4,5,6...15]

func shuffle(nums []int, n int) []int {
	workingArr := nums
	fmt.Println(workingArr)
	fmt.Println(n)
}

an_array := [6]int{2, 5, 1, 3, 4, 7}
last_x := 3

shuffle(an_array, last_x)