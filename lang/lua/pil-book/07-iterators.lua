
local function list_iter(t)
	local i = 0
	local size = table.getn(t)

	return function()
		i = i + 1
		if i <= size then return t[i] end
	end
end

local list = {10, 20, 30, 40, 50}

for v in list_iter(list) do
	print(v)
end
