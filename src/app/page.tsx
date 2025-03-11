'use client';

import { useState } from 'react';

/**
 * Calculate the number of times a salary has doubled using logarithms.
 * 
 * @param {number} startingSalary - The initial salary
 * @param {number} currentSalary - The current salary
 * @returns {object} - Doubling statistics
 */
function calculateSalaryDoublings(startingSalary: number, currentSalary: number) {
  // The exact number of doublings (may include a partial doubling)
  const exactDoublings = Math.log(currentSalary / startingSalary) / Math.log(2);
  
  // The number of complete doublings (rounded down)
  const completeDoublings = Math.floor(exactDoublings);
  
  // The percentage progress toward the next doubling
  const percentTowardNextDoubling = ((exactDoublings - completeDoublings) * 100).toFixed(2);
  
  // What the next exact doubling would be
  const nextDoublingSalary = startingSalary * Math.pow(2, completeDoublings + 1);
  
  return {
    completeDoublings,
    exactDoublings,
    percentTowardNextDoubling,
    nextDoublingSalary
  };
}

/**
 * Calculate how many doublings needed to reach dream salary
 * 
 * @param {number} startingSalary - The initial salary
 * @param {number} dreamSalary - The target dream salary
 * @returns {number} - Doublings needed
 */
function calculateDoublingsForDreamSalary(startingSalary: number, dreamSalary: number) {
  return Math.ceil(Math.log(dreamSalary / startingSalary) / Math.log(2));
}

export default function Home() {
  const [startingSalary, setStartingSalary] = useState<string>('');
  const [currentSalary, setCurrentSalary] = useState<string>('');
  const [dreamSalary, setDreamSalary] = useState<string>('');
  const [result, setResult] = useState<any>(null);

  const calculateResults = () => {
    const startingNum = parseFloat(startingSalary);
    const currentNum = parseFloat(currentSalary);
    const dreamNum = dreamSalary ? parseFloat(dreamSalary) : null;
    
    if (isNaN(startingNum) || isNaN(currentNum)) {
      return;
    }
    
    const doublingStats = calculateSalaryDoublings(startingNum, currentNum);
    const resultData: any = {
      ...doublingStats,
      startingSalary: startingNum,
      currentSalary: currentNum
    };
    
    if (dreamNum && !isNaN(dreamNum)) {
      const doublingsForDream = calculateDoublingsForDreamSalary(startingNum, dreamNum);
      const percentTowardDreamDoublings = ((doublingStats.exactDoublings / doublingsForDream) * 100).toFixed(2);
      
      resultData.doublingsForDream = doublingsForDream;
      resultData.dreamSalary = dreamNum;
      resultData.percentTowardDreamDoublings = percentTowardDreamDoublings;
    }
    
    setResult(resultData);
  };

  return (
    <div className="min-h-screen p-8 pb-20 flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-2xl mx-auto rounded-xl shadow-lg p-8 bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-center">Doubling Salary Calculator</h1>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6 text-sm">
          <p>Track your career growth by seeing how many times your salary has doubled. This gives you a clearer picture of your progress than just looking at percentages or absolute numbers.</p>
        </div>
        
        <div className="mb-8 space-y-6">
          <div>
            <label htmlFor="starting-salary" className="block text-sm font-medium mb-1">
              Starting Salary
            </label>
            <input
              id="starting-salary"
              type="number"
              value={startingSalary}
              onChange={(e) => setStartingSalary(e.target.value)}
              placeholder="Enter your starting salary"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
            />
          </div>
          
          <div>
            <label htmlFor="current-salary" className="block text-sm font-medium mb-1">
              Current Salary
            </label>
            <input
              id="current-salary"
              type="number"
              value={currentSalary}
              onChange={(e) => setCurrentSalary(e.target.value)}
              placeholder="Enter your current salary"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
            />
          </div>
          
          <div>
            <label htmlFor="dream-salary" className="block text-sm font-medium mb-1">
              Dream Salary (Optional)
            </label>
            <input
              id="dream-salary"
              type="number"
              value={dreamSalary}
              onChange={(e) => setDreamSalary(e.target.value)}
              placeholder="Enter your dream salary (optional)"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
            />
          </div>
          
          <button
            onClick={calculateResults}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </div>
        
        {result && (
          <div className="border-t pt-6 dark:border-gray-600">
            <h2 className="text-xl font-semibold mb-4">Results</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2">
                <div className="font-medium">Complete Doublings:</div>
                <div>{result.completeDoublings}</div>
              </div>
              
              <div className="grid grid-cols-2">
                <div className="font-medium">Exact Doublings:</div>
                <div>{result.exactDoublings.toFixed(4)}</div>
              </div>
              
              <div className="grid grid-cols-2">
                <div className="font-medium">Progress to Next Doubling:</div>
                <div>{result.percentTowardNextDoubling}%</div>
              </div>
              
              <div className="grid grid-cols-2">
                <div className="font-medium">Next Doubling Threshold:</div>
                <div>{result.nextDoublingSalary.toLocaleString()}</div>
              </div>
              
              {result.doublingsForDream && (
                <>
                  <div className="grid grid-cols-2">
                    <div className="font-medium">Doublings Needed for Dream:</div>
                    <div>{result.doublingsForDream}</div>
                  </div>
                  
                  <div className="grid grid-cols-2">
                    <div className="font-medium">Progress to Dream Salary:</div>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${Math.min(parseFloat(result.percentTowardDreamDoublings), 100)}%` }}
                        ></div>
                      </div>
                      <span>{result.percentTowardDreamDoublings}%</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
