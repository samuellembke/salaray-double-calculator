# Doubling Salary Calculator

A simple yet powerful tool for tracking and visualizing your career progression through the lens of salary doublings.

## What is the Doubling Salary Calculator?

This calculator helps you quantify your career progression by showing how many times your salary has doubled since you started working. Instead of looking at absolute numbers or simple percentages, tracking doubles provides a more meaningful perspective on your financial growth.

## Why Measure Salary Growth in Doubles?

### 1. Exponential Growth is More Meaningful Than Linear Growth

Traditional methods of measuring salary growth (like annual percentage increases) don't capture the compounding nature of career progression. A 10% raise early in your career might be a few thousand dollars, while later it could be tens of thousands.

### 2. Psychologically Significant Milestones

Each doubling represents a significant milestone in your career. Going from $30,000 to $60,000 feels substantial and meaningful. Tracking these doublings gives you clear markers of progress.

### 3. Creates Realistic Long-Term Goals

By understanding how many doublings you need to reach your dream salary, you can set realistic expectations about your career timeline. Most professionals can expect a few salary doublings over the course of their career.

### 4. Provides Context for Current Position

The calculator shows exactly where you are in your current doubling cycle. Being 70% towards your next doubling might inspire you to push for that promotion or job change that will complete the cycle.

## The Math Behind It

The calculator uses logarithms (base 2) to determine how many times your salary has doubled. The formula is:

```
Doublings = log₂(Current Salary / Starting Salary)
```

This gives you both complete doublings (whole numbers) and your progress toward the next doubling (as a percentage).

## How to Use

1. Enter your starting salary (your first job or career starting point)
2. Enter your current salary
3. Optionally, enter your dream salary
4. Click "Calculate" to see:
   - Complete doublings achieved
   - Exact doubling value (with decimal)
   - Progress toward your next doubling
   - Next doubling threshold (target to aim for)
   - How many additional doublings needed to reach your dream salary

## Development

This project was built with Next.js, React, and TypeScript. To run it locally:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font family.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
