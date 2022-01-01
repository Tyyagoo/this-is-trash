
local nil2str = function(val)
	return val or "nil"
end

function fn()
	local a = 5
	local b = 10

	function nested()
		a = 10
		local b = 5
		local c = 99
		print("Nested: "..nil2str(a)..":"..nil2str(b)..":"..nil2str(c))
	end

	print("Before nested: "..nil2str(a)..":"..nil2str(b)..":"..nil2str(c))
	nested()
	print("After nested: "..nil2str(a)..":"..nil2str(b)..":"..nil2str(c))
end

--fn()

function createPlayer(nickname)
	local maxHealth = function(level)
		return level * 100
	end

	return {
		nickname=nickname,
		level=1,
		health=100;
		takeDamage=function(o, amount)
			local curr = o.health - amount
			o.health = (curr > 0) and curr or 0
			print(o.nickname.." took "..amount.." hit points and remains at "..o.health.." hit points.")
		end,
		heal=function(o, amount)
			local curr = o.health + amount
			o.health = (curr < maxHealth(o.level)) and curr or maxHealth(o.level)
			print(o.nickname.." healed "..amount.." hit points and now has "..o.health.." hit points.")
		end,
		levelUp=function(o)
			o.level = o.level + 1
			o.health = maxHealth(o.level)
			print(o.nickname.." leveled up to "..o.level.."!")
		end,
	}
end

local tyy = createPlayer("Tyyago")
local arpa = createPlayer("Arpa")

--[[
tyy:takeDamage(20)
tyy:heal(10)

for i=0,10,1 do tyy:levelUp() end
tyy:takeDamage(200)
tyy:takeDamage(200)
tyy:takeDamage(200)
tyy:takeDamage(20000)
tyy:heal(10000)

for i=0,5,1 do arpa:levelUp() end
--]]

do
	rep = function(op, num)
		if num <= 0 then return end
		op()
		rep(op, num - 1)
		return
	end

	--rep(function() return (1 + 1) end, 10000000000) --> lua: 06-more-about-functions.lua:71: stack overflow
end

do
	rep = function(op, num)
		if num <= 0 then return end
		op()
		return rep(op, num - 1)
	end

	-- rep(function() return (1 + 1) end, 10000000000) --> this never throws an stackoverflow
end
