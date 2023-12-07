/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package org.containsduplicate;

import java.util.HashMap;

/**
 *
 * @author drfla
 */
class Solution {
        public boolean containsDuplicate(int[] nums) {
                HashMap<Integer, Boolean> foundNums = new HashMap<>();
                for(int num : nums){
                    if(foundNums.containsKey(num)){
                        return true;
                    }
                    foundNums.put(num, true);
                }
                return false;
        }
}

public class Java {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(solution.containsDuplicate(new int[]{1,2,3,4}));
    }
}