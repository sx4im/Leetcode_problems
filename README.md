# LeetCode JavaScript Solutions 🚀
A comprehensive collection of JavaScript solutions for LeetCode problems, featuring clean and efficient implementations across all difficulty levels.

## 📊 Stats
- **Total Problems Solved**: 500+
- **Language**: JavaScript (ES6+)
- **Difficulty Coverage**: Easy, Medium, Hard
- **Status**: Actively maintained

## 🗂️ Repository Structure
```
├── Easy/
│   ├── 001-two-sum/
│   │   ├── solution.js
│   │   ├── README.md
│   │   └── test.js
│   ├── 009-palindrome-number/
│   └── ...
├── Medium/
│   ├── 002-add-two-numbers/
│   │   ├── solution.js
│   │   ├── README.md
│   │   └── test.js
│   ├── 003-longest-substring/
│   └── ...
├── Hard/
│   ├── 004-median-two-sorted-arrays/
│   │   ├── solution.js
│   │   ├── README.md
│   │   └── test.js
│   ├── 023-merge-k-sorted-lists/
│   └── ...
└── README.md
```

## 🔧 How to Use

### Prerequisites
- Node.js (v14+ recommended)
- Git

### Getting Started
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sx4im/Leetcode_problems.git
   cd Leetcode_problems
   ```

2. **Navigate to specific problem**:
   ```bash
   cd Easy/001-two-sum/
   ```

3. **Run the solution**:
   ```bash
   # Run the main solution
   node solution.js
   
   # Run tests (if available)
   node test.js
   ```

4. **Test in browser** (optional):
   ```html
   <!-- Open in browser console -->
   <script src="solution.js"></script>
   ```

## 📈 Progress Tracking
- ✅ **Easy**: 200+ problems solved
- ✅ **Medium**: 250+ problems solved  
- ✅ **Hard**: 50+ problems solved
- 🎯 **Target**: 1000+ total solutions

## 🧪 Testing
Each solution includes:
- **Multiple test cases** covering edge cases
- **Performance benchmarks** for time-critical problems
- **Input validation** examples
- **Expected vs actual output** comparisons

Example test structure:
```javascript
// test.js
const solution = require('./solution');

const testCases = [
    { input: [2,7,11,15], target: 9, expected: [0,1] },
    { input: [3,2,4], target: 6, expected: [1,2] },
    { input: [3,3], target: 6, expected: [0,1] }
];

testCases.forEach((test, i) => {
    const result = solution(test.input, test.target);
    console.log(`Test ${i+1}: ${JSON.stringify(result) === JSON.stringify(test.expected) ? '✅ PASS' : '❌ FAIL'}`);
});
```

## 🤝 Contributing
Contributions are welcome! Please feel free to:
- 🐛 **Report bugs** or suggest improvements
- 💡 **Add alternative solutions** with different approaches
- ⚡ **Optimize existing code** for better performance
- 🧪 **Add more test cases** or edge cases
- 📚 **Improve documentation** and explanations

### Contribution Guidelines
1. Follow the existing file structure
2. Include comprehensive comments
3. Add test cases for new solutions
4. Update complexity analysis
5. Ensure code passes all tests

## 📄 License
This project is open source and available under the MIT License.

---

⭐ **Star this repository if it helps you in your coding journey!** ⭐

**Happy Coding! 🎉**

*Last Updated: September 2025*
