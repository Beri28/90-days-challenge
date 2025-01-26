findPrimeDates()
In this challenge, the task is to debug the existing code to successfully execute all provided test files.

Given two dates each in the format dd-mm-yyyy, you have to find the number of lucky dates between them (inclusive). To see if a date is lucky,

Firstly, sequentially concatinate the date, month and year, into a new integer  erasing the leading zeroes.
Now if x is divisible by either 4 or 7, then we call the date a lucky date.

For example, let's take the date "02-08-2024". After concatinating the day, month and year, we get x = 2082024. As x is divisible by 4 so the date "02-08-2024" is called a lucky date.

Debug the given function findPrimeDates and/or other lines of code, to find the correct lucky dates from the given input.

Note: You can modify at most five lines in the given code and you cannot add or remove lines to the code.

Question was gotten from hackeRank website. Link to full questions below.
https://www.hackerrank.com/interview/preparation-kits/one-month-preparation-kit/one-month-week-two/challenges

Got some help from https://programmingoneonone.com/hackerrank-prime-dates-problem-solution.html (i made an error on line 10, corrected my code with the help of the article on that site)