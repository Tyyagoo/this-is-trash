function reduce(col, acc, fn)
	--> i can't make this recursive cuz idk how to do "[head, ...tail]" = arr in lua
	--> note: with something like "spread" function this is easy, but performance poor
	for _, curr in ipairs(col) do
		acc = fn(acc, curr)
	end
	return acc
end

function sum_all(arr)
	return reduce(arr, 0, function(acc, curr) return acc + curr end)
end

function multiply_all(arr)
	return reduce(arr, 1, function(acc, curr) return acc * curr end)
end

local list = {10, 20, 30, 40, 50}
print(sum_all(list))
print(multiply_all(list))


function spread(arr, index)
	local i = index or 1
	if arr[i] ~= nil then
		return arr[i], spread(arr, i + 1)
	end
end

function pack(...)
	local arr = {}
	local i = 1
	for _, v in ipairs(arg) do
		if v ~= nil then
			arr[i] = v
			i = i + 1
		end
	end
	return arr
end

local a, b, c, d, e, f, g, h = spread(list)
print(a)
print(b)
print(c)
print(d)
print(e)
print(f)
print(g)
print(h)

local packed = pack(a, b, c, d, e, f, g, h)
print(sum_all(packed))
print(multiply_all(packed))
