

if false then
	print("Never occurs!")
elseif true then
	print("Always has been.")
else
	print("Never occurs!")
end


local cont = 0
while cont < 10 do
	print("Inside while: "..cont)
	cont = cont + 1
end
print("After WHILE ends: "..cont)


local last_value = 0
for i=0,10,3 do
	print("Inside for: "..i)
	last_value = i
end
print("After FOR ends: "..last_value)


local readable_fake_stream = {"", "", "", "", "", "", "", "", "", "", "", "", "", "", "You've found me!", "", "", "", "", "", "Oops, probably you missed the path."}
local line = ""
local i = 1
repeat
	line = readable_fake_stream[i]
	i = i + 1
until line ~= "" --> repeats until the expression evaluates to TRUE
print(line)

--[[
while true do
	print("INF")
end

repeat
	print("INF")
until false
--]]

