superDigit()

We define super digit of an integer x using the following rules:

Given an integer, we need to find the super digit of the integer.

If x has only x digit, then its super digit is 1.
Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
For example, the super digit of 9875 will be calculated as:
    super_digit(9875)   	9+8+7+5 = 29 
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2  

Question was gotten from hackeRank website. Link to full questions below.
https://www.hackerrank.com/interview/preparation-kits/one-month-preparation-kit/one-month-week-two/challenges