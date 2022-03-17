print(4 and 5)         --> 5
print(nil and 13)      --> nil
print(false and 13)    --> false
print(4 or 5)          --> 4
print(false or 5)      --> 5


--[[
	max: (x > y) and x or y

	-- if x is bigger than y
	(true) and x or y --> true && some_value always returns some_value
	x or y --> x || y always returns the first argument, because the expression is short circuited,
					  since all numbers are truthy values.
	x


	-- if x is lesser than y
	(false) and x or y --> false && some_value always returns false, cuz it's short circuit the expression
	false or y --> false || some_value always returns some_value
	y
]]--

x, y = 0, 1
max1 = (x > y) and x or y

x, y = y, x
max2 = (x > y) and x or y

print(max1..":"..max2)

--[[
	** Precedence:
	^
	not  - (unary) e.g. (-10) + 1
	*   /
	+   -
	..
	<   >   <=  >=  ~=  ==
	and
	or
]]--
