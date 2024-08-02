let m = nums1.length;
let n = nums2.length;
let imin = 0;
let imax = m;

const findMedianSortedArrays = (nums1, nums2) => {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }


    let halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2); // Partition index for nums1
        let j = halfLen - i; // Partition index for nums2

        // Check if i is too small
        if (i < m && j > 0 && nums2[j - 1] > nums1[i]) {
            imin = i + 1; // Move right
        }
        // Check if i is too large
        else if (i > 0 && j < n && nums1[i - 1] > nums2[j]) {
            imax = i - 1; // Move left
        }
        // i is just right
        else {
            let maxOfLeft;
            // Determine max value of the left side
            if (i === 0) {
                maxOfLeft = nums2[j - 1];
            } else if (j === 0) {
                maxOfLeft = nums1[i - 1];
            } else {
                maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            // If the total length is odd, return the max of the left side
            if ((m + n) % 2 === 1) {
                return maxOfLeft;
            }

            let minOfRight;
            // Determine min value of the right side
            if (i === m) {
                minOfRight = nums2[j];
            } else if (j === n) {
                minOfRight = nums1[i];
            } else {
                minOfRight = Math.min(nums1[i], nums2[j]);
            }

            // Return the average of max of left and min of right
            return (maxOfLeft + minOfRight) / 2.0;
        }
    }

    // If we exit the loop, something went wrong
    throw new Error("Input arrays are not sorted or valid.");
}
