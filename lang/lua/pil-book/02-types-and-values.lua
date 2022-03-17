print(type("Hello world"))  --> string
print(type(10.4*3))         --> number
print(type(print))          --> function
print(type(type))           --> function
print(type(true))           --> boolean
print(type(nil))            --> nil
print(type(type(X)))        --> type(type(X)) -> type(type(nil)) -> type("nil") -> string


--[[
	** String:
	\a	bell
	\b	back space
	\f	form feed
	\n	newline
	\r	carriage return
	\t	horizontal tab
	\v	vertical tab
	\\	backslash
	\"	double quote
	\'	single quote
	\[	left square bracket
	\]	right square bracket
]]--

print("Tables:")
local key_t = "type"
local obj = {"Alice", "Abraham", "Rick", {name="Tyyago", age=18}; [key_t]="string", length=3, ["1"]="one"}

print(obj[1])
print(obj[2])
print(obj[3])
print(obj[4].name..", "..obj[4].age.."yo!")

print(obj["1"])
print(obj.length)
print(obj[key_t])

print(obj[1]==obj["1"])
