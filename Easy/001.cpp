// 1. Two Sum 
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen; // maps number -> index

        for (int i = 0; i < nums.size(); ++i) {
            int complement = target - nums[i];

            // Check if complement already exists in map
            if (seen.find(complement) != seen.end()) {
                return {seen[complement], i};
            }

            // Store the current number with its index
            seen[nums[i]] = i;
        }

        return {};
    }
};