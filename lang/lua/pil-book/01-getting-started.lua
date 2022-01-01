
hello, space, world = "Hello", " ", "World!" --> This is called a chunk
print(hello..space..world)

--

hello, world = world, hello --> This is parsed from right-to-left, so values are evaluated first
							--> because of that, we can swap values easily like that
print(hello..space..world)

--

hello = "Hello" ; world = "Lua!" --> We can use ; to visually delimit different statements, but this isn't needed
print(hello..space..world)

--[[
	** Note:
	The terminology of a chunk it's being wrong used here because in this context chunk refers to the whole file
	However, i'm using in the sense of being able to execute these two lines (declaration and print) in
	interactive mode where the chunk is any piece of executable code.
	The different "virtual" chunks are separated by empty single line comments.
]]--

local file_name = arg[0] --> this variable is defined only in the scope of this file
print(file_name)
file_name = nil --> to delete some variable, assign null to it
